import { Produit } from './../core/models/produit.model';
import { Injectable } from '@angular/core';
import { Stock } from '../core/models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  monPanier : Stock[] = []
  constructor() { }

  ajouterProduit(produit : Produit) {
    let index = this.monPanier.findIndex(p => p.produit == produit)
    if(index > -1)
      this.monPanier[index].quantite++
    else
      this.monPanier.push({produit : produit, quantite : 1})
  }
}
