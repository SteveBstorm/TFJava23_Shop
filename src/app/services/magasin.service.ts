import { Magasin } from './../core/models/magasin.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {

  monMagasin : Magasin = {
    nom : 'Touta10balle',
    position : 'Chez moi',
    stock : [
      {produit : {titre : 'Coca', description : 'Trop sucré', prix : 2.10}, quantite : 10},
      {produit : {titre : 'Iphone', description : 'Trop cher', prix : 1232.10}, quantite : 3}
    ]
  }
  constructor() { }
}
