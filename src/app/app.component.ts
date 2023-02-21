import { FakedemoService } from 'src/app/services/fakedemo.service';
import { PanierService } from './services/panier.service';
import { Component } from '@angular/core';
import { Stock } from './core/models/stock.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TFJavaProjetSuivi';

  total : number = 0
  nbr : number = 0

  etat! : boolean

  constructor(private $panierService : PanierService, private $fakeservice: FakedemoService){}

  ngOnInit() {
    this.$panierService.monPanier.forEach((el : Stock) => this.total += (el.produit.prix * el.quantite))
    console.log("init app")

    this.$fakeservice.etatSubject.subscribe({
      next : (data : boolean) => { this.etat = data}
    })
  }
}
