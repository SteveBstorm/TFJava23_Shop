import { User } from './../core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = environment.url
  constructor(
    private $client : HttpClient
  ) { }

  login(login : string, pwd : string) {
    this.$client.get<User[]>(this.url+"/users").subscribe((data : User[]) => {
      data.forEach((el : User) => {
        if(el.login == login && el.password == pwd){
          localStorage.setItem("userInfo", JSON.stringify({login : el.login, role : el.role}))
        }
      })
    })
  }

  logout() {

  }
}
