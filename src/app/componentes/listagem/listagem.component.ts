import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ]
})

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  variavel: String = '';
  itens = [{ titulo: 'primeiro', valor: 'teste' },
  { titulo: 'primeiro2', valor: 'teste1' },
  { titulo: 'primeiro3', valor: 'teste2' },
  { titulo: 'primeiro4', valor: 'teste3' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
