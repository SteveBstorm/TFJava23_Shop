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
  constructor(private $productService : ProductService) {

  }

  ngOnInit() {
    console.log(this.liste);

    this.liste = this.$productService.listeProduit
    console.log(this.liste);


  }
}
