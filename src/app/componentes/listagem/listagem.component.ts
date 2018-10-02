import { Cadastro } from './../../models/cadastro';
import { DataService } from './../../servico/data.service';
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
  cadastros: Cadastro[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.cadastros = this.dataService.buscaCadastro();
  }

  adicionaCadastro(cadastro: Cadastro) {
    this.dataService.adicionar(cadastro);
  }
}
