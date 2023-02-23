import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of, Subject, tap } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class FakedemoService {

  etat : boolean = true

  etatSubject : Subject<boolean> = new Subject<boolean>()

  private url : string = environment.url
  constructor(
    private $client : HttpClient
  ) { }



  switchEtat() {
    this.etat = !this.etat
    this.etatSubject.next(this.etat)
    console.log(this.etat)
  }

  liste : Observable<string[]> = of(["salut", "coucou", "bonjour"])
  mafonction() {
    return this.liste.pipe(
      tap((l) => console.log(l)),
      delay(2000),
      tap((l) => console.log(l[0])),

      map((l) => l.filter((x : string) => x.length > 5)),
      tap((l) => console.log(l)),
      tap((l) => l.push("toto")),
      )
  }
}
