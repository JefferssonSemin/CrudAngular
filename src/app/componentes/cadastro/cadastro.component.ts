import { Cadastro } from './../../models/cadastro';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  nome: string;
  preco: string;
  @Output() adiciona = new EventEmitter<Cadastro>();

  ngOnInit() {
  }


  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  adicionar() {
    this.adiciona.emit({
      nome: this.nome,
      preco: this.preco,
      esconder: true
    });
    this.nome = '';
    this.preco = '';
  }
}


export enum UnidadeMedida {
  Litro = 1,
  Quilograma = 2,
  Unidade = 3,
}

