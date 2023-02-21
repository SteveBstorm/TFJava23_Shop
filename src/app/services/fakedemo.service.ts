import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakedemoService {

  etat : boolean = true

  etatSubject : Subject<boolean> = new Subject<boolean>()

  constructor() { }

  switchEtat() {
    this.etat = !this.etat
    this.etatSubject.next(this.etat)
    console.log(this.etat)
  }
}
