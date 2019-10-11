import { Cadastro } from './../models/cadastro';
import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root' 
})
export class DataService {

  cadastros: Cadastro[];

  constructor() {
    this.cadastros = [];
  }

  buscaCadastro(): Cadastro[] {
    if (localStorage.getItem('cadastro') === null) {
      this.cadastros = [];
    } else {
      this.cadastros = JSON.parse(localStorage.getItem('cadastro'));
    }
    return this.cadastros;
  }

  adicionar(cadastro: Cadastro): void {
    this.cadastros.unshift(cadastro);
    let cadastros;
    if (localStorage.getItem('cadastro') === null) {
      cadastros = [];
      cadastros.unshift(cadastro);
      localStorage.setItem('cadastro', JSON.stringify(cadastro));
    } else {
      cadastros = JSON.parse(localStorage.getItem('cadastro'));
      cadastros.unshift(cadastro);
      localStorage.setItem('cadastro', JSON.stringify(cadastro));
    }
  }

  remover(cadastro: Cadastro) {
    for (let i = 0; this.cadastros.length; i++) {
      if (cadastro === this.cadastros[i]) {
        this.cadastros.splice(i, 1);
        localStorage.setItem('cadastro', JSON.stringify(this.cadastros));
      }
    }

  }
}
