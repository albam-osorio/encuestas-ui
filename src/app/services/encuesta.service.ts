import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Encuesta } from '../models/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService extends BaseService {

  private PATH = 'polls';

  constructor(public _http: HttpClient, public _router: Router) {
    super(_http, _router);
  }

  public get() {
    const headers = this.getHttpOptions();

    return this._get(this.PATH, headers);
  }

  public getById(id: number) {
    const headers = this.getHttpOptions();

    return this._getById(this.PATH, id, headers);
  }

  public create(obj: Encuesta) {
    const headers = this.getHttpOptions();

    const params = {
      documentNumber: obj.documentNumber,
      email: obj.email,
      comments: obj.comments,
      idBrand: obj.idBrand,
    };
    return this.post(this.PATH, headers, params);
  }

  public update(obj: any) {
    const headers = this.getHttpOptions();

    const params = {
      numeroDocumento: obj.numeroDocumento,
      email: obj.email,
      comentarios: obj.comentarios,
      idMarca: obj.idMarca,
      version: obj.version
    };
    return this.put(this.PATH, obj.id, headers, params);
  }

  public delete(id: number) {
    const headers = this.getHttpOptions();

    return this._delete(this.PATH, id, headers);
  }

  public deleteWithVersion(id: number, version: number) {
    const headers = this.getHttpOptions();

    return this._deleteWithVersion(this.PATH, id,version, headers);
  }

}
