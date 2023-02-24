import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jeux, JeuxService } from 'src/app/services/jeux.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent {

  jeux! : Jeux[]
  constructor(
    private $service : JeuxService,
    private $router : Router
    ){
  }

  ngOnInit(){
    this.loadItems()
  }

  showDetail(id : number) {
    this.$router.navigate(['fake/detailjeu', id])
  }

  loadItems() {
    this.$service.getAll().subscribe({
      next : (data : Jeux[]) => {this.jeux = data },
      error : (error) => {console.log(error.message)}
    })
  }

  create() {
    this.$service.create({titre : "Majora's mask", annee : 1996}).subscribe({
      next : () => this.loadItems()
    })
  }

  delete(id : number) {
    this.$service.delete(id).subscribe({
      next : () => this.loadItems()
    })
  }

  update() {
    this.$service.update(5, {titre : "Pour faire plaisir à l'eleve chiant au premier rang", annee : 1996})
    .subscribe({
      next : () => this.loadItems()
    })
  }
}
