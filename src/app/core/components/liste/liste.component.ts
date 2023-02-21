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
  constructor(
    private $productService : ProductService,
    private $magasinService : MagasinService,
    private $panierService : PanierService
    ) {

  }

  ngOnInit() {
    console.log(this.liste);

    this.liste = this.$productService.listeProduit
    console.log(this.liste);
  }

  ajoutPanier(index : number) : void{
    if(this.liste[index].quantite > 0)
    {
      this.$magasinService.reduireQty(index)
      this.$panierService.ajouterProduit(this.liste[index].produit)
    }
  }
}
