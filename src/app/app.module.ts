import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CabecarioComponent } from './componentes/cabecario/cabecario.component';
import {SidebarModule} from 'primeng/sidebar';
import {AccordionModule} from 'primeng/accordion';
import { RoutingModule } from './/routing.module';
import { ListagemComponent } from './componentes/listagem/listagem.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import {InputTextModule} from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {SpinnerModule} from 'primeng/spinner';
import { MessageService } from 'primeng/api';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CabecarioComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    SidebarModule,
    AccordionModule,
    ButtonModule,
    RoutingModule,
    InputTextModule,
    FormsModule,
    SpinnerModule,
    ReactiveFormsModule,
    CheckboxModule,
    CalendarModule,
    AutoCompleteModule,
    FieldsetModule,
    PanelModule,
    CardModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
