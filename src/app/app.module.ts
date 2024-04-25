import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*Importações Angular Material*/
=======

/*Importações Angular Marterial*/
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { RestritoRoutingModule } from './restrito/restrito-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
/*Importações Angular Marterial*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
<<<<<<< HEAD
import { RestritoComponent } from './restrito/restrito.component';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './restrito/lista-produto/lista-produto.component';
import { MenuRestritoComponent } from './restrito/menu-restrito/menu-restrito.component';
=======
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    MenuComponent,
<<<<<<< HEAD
    RodapeComponent,
    RestritoComponent,
    AtualizaProdutoComponent,
    CadastroProdutoComponent,
    ListaProdutoComponent,
    MenuRestritoComponent
=======
    RodapeComponent
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
=======
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
<<<<<<< HEAD
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RestritoRoutingModule
  ],
  providers: [],
=======
    MatToolbarModule
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8
  bootstrap: [AppComponent]
})
export class AppModule { }
