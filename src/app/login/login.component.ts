import { Component } from '@angular/core';
<<<<<<< HEAD
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
=======
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
<<<<<<< HEAD
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario!: string;
  senha!: string;

  constructor(private _loginService: LoginService,private _router:Router){}

  fazerLogin(){
    this._loginService.login(this.usuario,this.senha);
    this._router.navigate(['/restrito/lista']);
    this._loginService.setMostraMenu(false);
  }
=======
  styleUrl: './login.component.css'
})
export class LoginComponent {

>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8
}
