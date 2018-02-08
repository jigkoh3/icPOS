import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import { Constants } from '../app/app.contants';
import { HandleError } from './handleError';
import { ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AuthProvider {
  constructor(
    public http: HttpClient,
    private toastCtrl: ToastController,
    private translateService: TranslateService,
    private hdle: HandleError
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
    return this.http.post(Constants.API_URL + "/api/auth/signin", credentials)
      .toPromise()
      .then(response => this.loginSuccess(response))
      .catch(this.handleError);
  }

  signup(credential) {
    return this.http.post(Constants.API_URL + "/api/auth/ownersignup", credential)
      .toPromise()
      .then(response => this.registerSuccess(response))
      .catch(err => {
        console.log(err.error.message);
        this.hdle.get(err.error.message);
      });
  }

  logout() {
    window.localStorage.removeItem('user@' + Constants.API_URL);
    window.localStorage.removeItem('token');
    console.log('logout');
  }

  private loginSuccess(res) {
    window.localStorage.setItem('user@' + Constants.API_URL, JSON.stringify(res));
    window.localStorage.setItem('token', res.loginToken);
    return res;
  }

  private updateSuccess(res) {
    window.localStorage.setItem('user@' + Constants.API_URL, JSON.stringify(res));
    return res;
  }

  private registerSuccess(res) {
    window.localStorage.setItem('user@' + Constants.API_URL, JSON.stringify(res));
    window.localStorage.setItem('token', res.loginToken);
    return res;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.error || error);
  }

}
