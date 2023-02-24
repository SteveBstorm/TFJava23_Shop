import { JeuxService } from 'src/app/services/jeux.service';
import { Jeux } from './../../../../services/jeux.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailjeu',
  templateUrl: './detailjeu.component.html',
  styleUrls: ['./detailjeu.component.scss']
})
export class DetailjeuComponent {
  jeu! : Jeux

  constructor(
    private $service : JeuxService,
    private $ar : ActivatedRoute
    ) {

  }

  ngOnInit() {
    //appel au service via l'id transmit via la route
    // let id = this.$ar.snapshot.params["id"]
    // this.$service.getById(id).subscribe((data : Jeux) => this.jeu = data)

    //utilisation du resolver => résoudre l'appel api AVANT le chargement du composant
    this.jeu = this.$ar.snapshot.data["currentGame"]
  }
}
