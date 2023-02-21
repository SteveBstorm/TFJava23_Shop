import { PanierService } from './../../services/panier.service';
import { Stock } from './../../core/models/stock.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  panier! : Stock[]
  total : number = 0

  constructor(private $panierService : PanierService){}

  ngOnInit() {
    this.panier = this.$panierService.monPanier
    this.panier.forEach((el : Stock) => this.total += (el.produit.prix * el.quantite))
  }
}
