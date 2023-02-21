import { Stock } from './../core/models/stock.model';
import { MagasinService } from './magasin.service';
import { Produit } from './../core/models/produit.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listeProduit! : Stock[]
  constructor(private $magasin : MagasinService) {
    this.listeProduit = this.$magasin.monMagasin.stock
    //this.$magasin.monMagasin.stock.forEach((el : Stock) => this.listeProduit.push(el.produit) )
   }
}
