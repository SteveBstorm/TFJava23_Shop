import { Magasin } from './../../models/magasin.model';
import { PanierService } from './../../../services/panier.service';
import { MagasinService } from './../../../services/magasin.service';
import { Stock } from './../../models/stock.model';
import { Produit } from './../../models/produit.model';
import { ProductService } from './../../../services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  liste! : Stock[]
  selectedIndex! : number

  constructor(
    private $productService : ProductService,
    private $magasinService : MagasinService,
    private $panierService : PanierService
    ) {

  }

  ngOnInit() {
   this.loadItems()

  }

  loadItems(){
    this.$magasinService.getMagasin().subscribe((data : Magasin) => {
      this.liste = data.stock
    })
   //this.liste = this.$productService.listeProduit
  }

  ajoutPanier(index : number) : void{
    if(this.liste[index].quantite > 0)
    {
      this.$magasinService.reduireQty(this.liste[index])?.subscribe(() => this.loadItems())
      this.$panierService.ajouterProduit(this.liste[index].produit)
    }
  }

  showDetail(id :number){
    this.selectedIndex = id
  }
}
