import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaService extends BaseService {

  private PATH = 'brands';

  constructor(public _http: HttpClient, public _router: Router) {
    super(_http, _router);
  }

  get() {
    const headers = this.getHttpOptions();

    return this._get(this.PATH, headers);
  }
}
