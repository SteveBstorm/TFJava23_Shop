import { Stock } from './../core/models/stock.model';
import { MagasinService } from './magasin.service';
import { Produit } from './../core/models/produit.model';
import { Injectable } from '@angular/core';
import { Magasin } from '../core/models/magasin.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  listeProduit! : Stock[]
  constructor(private $magasin : MagasinService) {
    this.$magasin.getMagasin().subscribe((data : Magasin) => {
      this.listeProduit = data.stock
      console.log(data)
    })


   }

  getProductById() {

  }
}
