import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Message } from 'primeng/api';

import { Encuesta } from 'src/app/models/encuesta';
import { Marca } from 'src/app/models/marca';
import { AppService } from 'src/app/services/app.service';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  records: Encuesta[];

  messages: Message[];

  constructor(
    private app: AppService,
    private service: EncuestaService,
    private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.app.getPrincipal().subscribe(principal => {
      console.table(principal);
    });
    this.reset();
  }

  private reset() {
    this.records = [];

    this.service.get().subscribe(this.populateTable());
  }

  //-------------------------------------------------------------------------------------------------------------------
  //-- Poblado de UI
  //-------------------------------------------------------------------------------------------------------------------
  private populateTable(): (value: Object) => void {
    return (array: Encuesta[]) => {
      this.records.length = 0;
      this.records.push(...array);
    };
  }

  //-------------------------------------------------------------------------------------------------------------------
  //-- Utilities
  //-------------------------------------------------------------------------------------------------------------------
  delete(record: Encuesta) {
    console.table(record);

    this.confirmationService.confirm({
      message: '¿Esta seguro de eliminar la respuesta ' + record.id + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteWithVersion(record.id, record.version).subscribe(value => {
          this.reset();
          this.messages = [{
            severity: 'success', summary: 'Exíto', detail: 'Registro eliminado'
          }];
        }, (error) => {
          this.messages = [{
            severity: 'error', summary: 'Error', detail: error.error.message
          }];
        });
      }
    });
  }
}
