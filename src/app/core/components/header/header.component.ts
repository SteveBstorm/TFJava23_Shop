import { Component } from '@angular/core';
import { FakedemoService } from 'src/app/services/fakedemo.service';
import { PanierService } from 'src/app/services/panier.service';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  total : number = 0
  nbr : number = 0

  etat! : boolean

  constructor(
    private $panierService : PanierService,
    private $fakeservice: FakedemoService){}

  ngOnInit() {
    this.$panierService.totalSubject.subscribe({
      next : (data : number) => {
        this.total = data
      }
    })
    this.$panierService.nbrSubject.subscribe({
      next : (data : number) => {
        this.nbr = data
      }
    })
    console.log("init app")

    this.$fakeservice.etatSubject.subscribe({
      next : (data : boolean) => { this.etat = data}
    })
  }
}
