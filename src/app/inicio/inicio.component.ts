<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../produto.service';
=======
import { Component } from '@angular/core';
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
<<<<<<< HEAD
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  public produtos: Produto[] = [];

  constructor(private _produtoService:ProdutoService){}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos():void{
    this._produtoService.getProdutos().subscribe(
      retornaProduto =>{
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        )
      }
    )
  }
=======
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
>>>>>>> 97a75e068f55c6c8dad270f3cefac5b8798308e8

}
