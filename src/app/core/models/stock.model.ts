import { Produit } from './produit.model';
export interface Stock {
  id? : number
  produit : Produit
  idproduit? : number
  quantite : number
  magasinId? : number
}

