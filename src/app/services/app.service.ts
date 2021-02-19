import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseService {

  authenticated = false;

  constructor(public _http: HttpClient, public _router: Router) {
    super(_http, _router);
  }

  authenticate(credentials: { username: string; password: string; }, callback?: () => any, error?: (error: any) => void) {
    this.invalidateToken();

    if (credentials) {
      const headers = this.getHttpOptions();

      this.post('token', headers, credentials)
        .subscribe(response => {

          console.table(response);
          if (response['token']) {
            sessionStorage.setItem('token', response['token']);
            this.authenticated = true;
            this._router.navigateByUrl('/');
          } else {
            alert("Authentication failed.")
          }

          return callback && callback();
        }, error);
    }
  }

  getPrincipal() {
    const headers = this.getHttpOptions();
    return this._get('users/principal', headers)
  }

  logout() {
    this.invalidateToken();
    this._router.navigateByUrl('/login');
  }

  invalidateToken() {
    sessionStorage.setItem('token', '');
    this.authenticated = false;
  }
}
