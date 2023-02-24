import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username! : string
  pwd! : string

  constructor(private $service : UserService){}

  login() {
    this.$service.login(this.username, this.pwd)
  }
}
