import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  private url : string = environment.url
  constructor(
    private $client : HttpClient
  ) { }

  getAll() : Observable<Jeux[]> {
    return this.$client.get<Jeux[]>(this.url+"/jeux")
  }

  create(jeu : Jeux) :Observable<void> {
    // let token = "aezmrljfldkjazerlkj"
    // let myHeader : HttpHeaders = new HttpHeaders().set('authorization' , 'bearer '+token)
    return this.$client.post<void>(this.url+"/jeux", jeu/*, {headers : myHeader}*/)
  }

  delete(id : number) : Observable<void> {
    return this.$client.delete<void>(this.url+"/jeux/"+id)
  }

  update(id : number, jeu : Jeux) : Observable<void> {
    return this.$client.put<void>(this.url+"/jeux/"+id, jeu)
  }

  getById(id : number) : Observable<Jeux> {
    return this.$client.get<Jeux>(this.url+"/jeux/"+id)
  }
}

export interface Jeux {
  id? : number
  titre : string
  annee : number
}
