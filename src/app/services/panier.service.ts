import { Subject } from 'rxjs';
import { Produit } from './../core/models/produit.model';
import { Injectable } from '@angular/core';
import { Stock } from '../core/models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  monPanier : Stock[] = []
  total : number = 0
  nbrArticle : number = 0

  totalSubject : Subject<number> = new Subject<number>()
  nbrSubject : Subject<number> = new Subject<number>()

  constructor() { }

  ajouterProduit(produit : Produit) {
    let index = this.monPanier.findIndex(p => p.produit == produit)
    if(index > -1)
      this.monPanier[index].quantite++
    else
      this.monPanier.push({produit : produit, quantite : 1})

    this.nbrArticle += 1
    this.total += produit.prix
    this.totalSubject.next(this.total)
    this.nbrSubject.next(this.nbrArticle)

  }
}
