import { JeuxService } from 'src/app/services/jeux.service';
import { Jeux } from './../services/jeux.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeuResolver implements Resolve<Jeux> {
  constructor(private $service : JeuxService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Jeux> {
    return this.$service.getById(route.params["id"])
  }
}
