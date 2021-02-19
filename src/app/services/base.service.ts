import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private _API_ENDPOINT_GATEWAY = '';

  constructor(public _http: HttpClient, public _router: Router) {
  }


  public getHttpOptions() {
    var result = new HttpHeaders();
    return result
  }

  private getEndPoint() {
    if (!this._API_ENDPOINT_GATEWAY) {
      this._API_ENDPOINT_GATEWAY = 'http://localhost:4200/server/api/v1/';
    }
    return this._API_ENDPOINT_GATEWAY;
  }

  protected _get(path: string, headers: HttpHeaders): Observable<any> {
    const url = this.getEndPoint() + path;
    const options = { headers: headers };

    this.log('GET', url, options.headers);

    return (
      this._http
        .get(url, options)
        .pipe(catchError((error) => this.handleError(error, this._router)))
    );
  }

  protected _getById(path: string, id: number, headers: HttpHeaders): Observable<any> {
    const url = `${this.getEndPoint()}${path}/${id}`;
    const options = { headers: headers };

    this.log('GET', url, options.headers);

    return (
      this._http
        .get(url, options)
        .pipe(catchError((error) => this.handleError(error, this._router)))
    );
  }


  protected post(path: string, headers: HttpHeaders, data: any): Observable<any> {
    const url = this.getEndPoint() + path;
    const options = { headers: headers };

    this.log('POST', url, options.headers, data);

    return (
      this._http
        .post(url, data, options)
        .pipe(catchError((error) => this.handleError(error, this._router)))
    );
  }

  protected put(path: string, id: number, headers: HttpHeaders, data: any): Observable<any> {
    const url = `${this.getEndPoint()}${path}/${id}`;
    const options = { headers: headers };

    this.log('PUT', url, options.headers, data);

    return (
      this._http
        .put(url, data, options)
        .pipe(catchError((error) => this.handleError(error, this._router)))
    );
  }

  protected _delete(path: string, id: number, headers: HttpHeaders): Observable<any> {
    const url = `${this.getEndPoint()}${path}/${id}`;
    const options = { headers: headers };

    this.log('DEL', url, options.headers);

    return (
      this._http
        .delete(url, options)
        .pipe(catchError((error) => this.handleError(error, this._router)))
    );
  }

  protected _deleteWithVersion(path: string, id: number, version: number, headers: HttpHeaders): Observable<any> {
    const url = `${this.getEndPoint()}${path}/${id}/${version}`;
    const options = { headers: headers };

    this.log('DELl', url, options.headers);

    return (
      this._http
        .delete(url, options)
        .pipe(catchError((error) => this.handleError(error, this._router)))
    );
  }



  protected handleError(error: HttpErrorResponse, _router: Router) {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error(`ErrorEvent: ${error.error.message}`);
      } else {
        console.log(`error status : ${error.status} ${error.statusText}`);
        console.table(error)
        switch (error.status) {
          case 401:      //unauthorized
            _router.navigateByUrl("/login");
            break;
          case 403:     //forbidden
            _router.navigateByUrl("/forbidden");
            break;
        }
      }
    } else {
      console.error("some thing else happened");
    }
    return throwError(error);
  }

  private log(method: string, url: string, options: any, data?: any) {
    console.log(`${method}:${url}`);

    if (options) {
      //console.table(options);
    }

    if (data) {
      //console.table(data);
    }
  }

}