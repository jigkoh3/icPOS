import { AuthProvider } from '../auth/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel, HomeModel, ItemModel } from '../../assets/models/menus.model';
import { ProductModel, PriceModel, SubmenuModel } from '../../assets/models/product.model';
import { OrderModel } from '../../assets/models/order.model';
import _ from 'lodash';
import { Constants } from '../../app/app.contants';
import { HandleError } from '../handleError';

@Injectable()
export class MenuProvider {
  public homeData: HomeModel;
  constructor(private http: HttpClient, 
    private auth : AuthProvider,
    private handleErr: HandleError) {

  }

  getMenus(): Promise<HomeModel> {
    if (this.auth.authenticated()) {
      let hearder = Constants.Header;
      return this.http.get(Constants.API_URL + '/api/homes', { headers: hearder })
        .toPromise()
        .then(response => {
          this.homeData = response as HomeModel;
          return this.homeData;
        })
        .catch(err => this.handleError(err));
    }else{
      this.handleErr.notifyError("User is not Authorize");
      return Promise.reject("User is not Authorize");
    }
  }

  addMenu(menus: Array<MenuModel>): Promise<HomeModel> {
    // this.local = window.localStorage.getItem(this.storageName);
    // if (this.local) {
    //   this.homeData = JSON.parse(this.local);
    //   this.homeData.menus = menus;
    //   window.localStorage.setItem(this.storageName, JSON.stringify(this.homeData));
    //   return new Promise((resolve, reject) => {
    //     resolve(this.homeData);
    //   });
    // }
    return new Promise((resolve, reject) => {
      resolve(this.homeData);
    });
  }

  createBill(data: OrderModel): Promise<HomeModel> {
    // data.total = _.sumBy(data.items, function (o) { return o.total * o.qty; })
    this.homeData.bills.push(data);
    // window.localStorage.setItem(this.storageName, JSON.stringify(this.homeData));
    return Promise.resolve(this.homeData);
  }

  private handleError(error: any): Promise<any> {
    this.handleErr.notifyError(error.error);
    return Promise.reject(error.message || error);
  }

}
