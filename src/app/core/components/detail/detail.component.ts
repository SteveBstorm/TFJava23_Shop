import { MagasinService } from './../../../services/magasin.service';
import { Produit } from './../../models/produit.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input() set index(value : number) {
    this.article = this.$magasinService.monMagasin.stock[value].produit
  }
  article! : Produit

  constructor(private $magasinService : MagasinService){}

  ngOnInit(){
    console.log("init")

  }
}
