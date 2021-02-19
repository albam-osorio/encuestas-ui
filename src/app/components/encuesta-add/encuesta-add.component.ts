import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Message, SelectItem } from 'primeng/api';
import { Encuesta } from 'src/app/models/encuesta';
import { Marca } from 'src/app/models/marca';
import { AppService } from 'src/app/services/app.service';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
  selector: 'app-encuesta-add',
  templateUrl: './encuesta-add.component.html',
  styleUrls: ['./encuesta-add.component.css']
})
export class EncuestaAddComponent implements OnInit {

  form: FormGroup;
  numeroDocumento: FormControl;
  email: FormControl;
  comentarios: FormControl;
  marca: FormControl;

  marcas: SelectItem[];

  messages: Message[];

  constructor(
    private app: AppService,
    private service: EncuestaService,
    private serviceBrands: MarcaService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.app.getPrincipal().subscribe(principal => {
      console.table(principal);
    });
    this.buildForms();
    this.reset();
  }

  private buildForms() {
    this.numeroDocumento = new FormControl(null, Validators.nullValidator);
    this.email = new FormControl(null, Validators.nullValidator);
    this.comentarios = new FormControl(null, Validators.nullValidator);
    this.marca = new FormControl(null, Validators.nullValidator);

    this.form = this.formBuilder.group({
      numeroDocumento: this.numeroDocumento,
      email: this.email,
      comentarios: this.comentarios,
      marca: this.marca
    });
  }

  private reset() {
    this.form.reset();

    this.serviceBrands.get().subscribe(data => this.marcas = (<Marca[]>data).map(a => (<SelectItem>{ value: a.id, label: a.code })));
  }

  submit() {
    const record: Encuesta = {
      documentNumber: this.numeroDocumento.value,
      email: this.email.value,
      comments: this.comentarios.value,
      idBrand: this.marca.value,
      version: 0
    };

    this.service.create(record).subscribe(value => {
      this.reset();
      this.messages = [{
        severity: 'success', summary: 'Exíto', detail: 'Registro creado'
      }];
    }, (error) => {
      this.messages = [{
        severity: 'error', summary: 'Error', detail: error.error.message
      }];
    });

  }
}
