import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import { Constants } from '../../app/app.contants';
import { ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HandleError } from '../handleError';

@Injectable()
export class AuthProvider {
  jwt: JwtHelper = new JwtHelper();
  constructor(
    private http: HttpClient,
    private handleErr: HandleError
  ) {

  }

  authenticated() {
    return tokenNotExpired();
  }

  Uesr(){
    if(this.authenticated()){
      return this.jwt.decodeToken(window.localStorage.getItem('token'))
    }else{
      return null;
    }
  }

  login(credentials) {
    return this.http.post(Constants.API_URL + "/api/auth/signin", credentials)
      .toPromise()
      .then(response => this.loginSuccess(response))
      .catch(err => this.handleError(err));
  }

  signup(credential) {
    return this.http.post(Constants.API_URL + "/api/auth/ownersignup", credential)
      .toPromise()
      .then(response => this.registerSuccess(response))
      .catch(err => this.handleError(err));
  }

  logout() {
    window.localStorage.removeItem('user@' + Constants.API_URL);
    window.localStorage.removeItem('token');
    console.log('logout');
  }

  private loginSuccess(res) {
    window.localStorage.setItem('token', res.loginToken);
    return res;
  }

  private registerSuccess(res) {
    window.localStorage.setItem('token', res.loginToken);
    return res;
  }


  private handleError(error: any): Promise<any> {
    this.handleErr.notifyError(error.error);
    return Promise.reject(error.error || error);
  }

}
