<<<<<<< HEAD
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';
=======
import { Component } from '@angular/core';
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'Loja PH Gamer';
  mostrarMenu:boolean = true;

  constructor(private _loginService: LoginService){}

  ngOnInit(): void {
    this._loginService.getMostraMenu().subscribe(
      res => { this.mostrarMenu = res; }
    )
  }

  ngOnDestroy(){
    localStorage.clear();
  }
  
=======
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loja-ph-gamer';
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8
}
