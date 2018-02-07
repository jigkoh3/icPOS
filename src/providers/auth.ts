import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthProvider {
  public API_URL: string = 'https://ic-pos-service.herokuapp.com';

  constructor(
    public http: HttpClient
  ) {

  }

  setHeader() {
    let header = new HttpHeaders()
    header = header.append('Content-Type', 'application/json');
    header = header.append('Accept', 'application/json');
    header = header.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return header;
  }

  authenticated(): Promise<any> {
    return new Promise((resolve, reject) => {
      let token = window.localStorage.getItem('token');
      resolve(tokenNotExpired(null, token));
    });
  }

  login(credentials) {
    return this.http.post(this.API_URL + "/api/auth/signin", credentials)
      .toPromise()
      .then(response => this.loginSuccess(response))
      .catch(this.handleError);
  }

  signup(credential) {
    return this.http.post(this.API_URL + "/api/auth/ownersignup", credential)
      .toPromise()
      .then(response => this.registerSuccess(response))
      .catch(this.handleError);
  }

  logout() {
    window.localStorage.removeItem('user@' + this.API_URL);
    window.localStorage.removeItem('token');
    console.log('logout');
  }

  private loginSuccess(res) {
    window.localStorage.setItem('user@' + this.API_URL, JSON.stringify(res));
    window.localStorage.setItem('token', res.loginToken);
    return res;
  }

  private updateSuccess(res) {
    window.localStorage.setItem('user@' + this.API_URL, JSON.stringify(res));
    return res;
  }

  private registerSuccess(res) {
    window.localStorage.setItem('user@' + this.API_URL, JSON.stringify(res));
    window.localStorage.setItem('token', res.loginToken);
    return res;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.error || error);
  }

}
