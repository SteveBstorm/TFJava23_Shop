import { MagasinService } from './../../../services/magasin.service';
import { Produit } from './../../models/produit.model';
import { Component, Input } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input() set id(value : number) {
    this.$magasinService.getProductById(value).subscribe((p : Stock) => this.article = p)
  }
  article! : Stock

  constructor(private $magasinService : MagasinService){}

  ngOnInit(){
    console.log("init")

  }
}
