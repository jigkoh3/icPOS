import { AuthProvider } from './../auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel, HomeModel, ItemModel } from '../../assets/models/menus.model';
import { ProductModel, PriceModel, SubmenuModel } from '../../assets/models/product.model';
import { OrderModel } from '../../assets/models/order.model';

import _ from 'lodash';
/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuProvider {
  local: any;
  storageName = "0638265946";
  online: boolean = false;
  public homeData: HomeModel;
  constructor(public http: HttpClient, private auth: AuthProvider) {

  }


  getLocalStorage(): Promise<HomeModel> {
    // this.local = window.localStorage.getItem(this.storageName);
    // // console.log(this.local);
    // if (this.local) {
    //   this.homeData = JSON.parse(this.local);
    //   return Promise.resolve(this.homeData);
    // }else{
    //   return this.http.get('./assets/json/menus.json')
    //   .toPromise()
    //   .then(response => {
    //     this.homeData = response as HomeModel;
    //     window.localStorage.setItem(this.storageName, JSON.stringify(response));
    //     return this.homeData;
    //   })
    //   .catch(this.handleError);
    // }
    let hearder = this.auth.setHeader();
    return this.http.get(this.auth.API_URL + '/api/homes/:0001', { headers: hearder })
      .toPromise()
      .then(response => {
        this.homeData = response as HomeModel;
        // window.localStorage.setItem(this.storageName, JSON.stringify(response));
        return this.homeData;
      })
      .catch(this.handleError);

  }

  getMenus(): Promise<HomeModel> {

    return this.getLocalStorage();

  }

  addMenu(menus: Array<MenuModel>): Promise<HomeModel> {
    this.local = window.localStorage.getItem(this.storageName);
    // console.log(this.local);
    if (this.local) {
      this.homeData = JSON.parse(this.local);
      this.homeData.menus = menus;
      window.localStorage.setItem(this.storageName, JSON.stringify(this.homeData));
      return new Promise((resolve, reject) => {
        resolve(this.homeData);
      });
    }
  }

  createBill(data: OrderModel): Promise<HomeModel> {
    data.total = _.sumBy(data.items, function (o) { return o.total * o.qty; })
    this.homeData.bills.push(data);
    window.localStorage.setItem(this.storageName, JSON.stringify(this.homeData));
    return Promise.resolve(this.homeData);
  }

  private handleError(error: any): Promise<any> {
    // this.log.errorService('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
