import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { HandleError } from '../handleError';
import { Constants } from '../../app/app.contants';
import { ShopModel } from '../../assets/models/shop.model';

/*
  Generated class for the ShopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopProvider {
  private hearder: any;

  constructor(
    public http: HttpClient,
    private auth: AuthProvider,
    private handleErr: HandleError
  ) {
    this.hearder = Constants.Header;
    console.log('Hello ShopProvider Provider');
  }

  crateNewBranch(branch, shopid): Promise<ShopModel> {
    return this.http.put(Constants.API_URL + '/api/shops/branch/' + shopid, branch, { headers: this.hearder })
      .toPromise()
      .then(response => response as ShopModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
