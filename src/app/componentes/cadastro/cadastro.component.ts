import { Component, OnInit, NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';


@NgModule({
  imports: [
    FieldsetModule,
    PanelModule,
    CardModule
  ],
  declarations: [
  ]
})

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  userform: FormGroup;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'nome': new FormControl('', Validators.required)
    });

  }

}
export enum UnidadeMedida {
  Litro = 1,
  Quilograma = 2,
  Unidade = 3,
}
