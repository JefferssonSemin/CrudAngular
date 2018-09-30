import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { ListagemComponent } from './componentes/listagem/listagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  { path: 'listar', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [], exports: [RouterModule]
})

export class RoutingModule { }
