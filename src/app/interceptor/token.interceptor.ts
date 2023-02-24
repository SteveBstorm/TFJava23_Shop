import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}
  //ne pas oublié d'ajouter HTTP_INTERCEPTORS dans le provider du module
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = "aezmrljfldkjazerlkj"
    if(token) {
      let clone = request.clone()
      clone.headers.set('authorization' , 'bearer '+token)
      return next.handle(clone)
    }
    return next.handle(request);
  }
}
