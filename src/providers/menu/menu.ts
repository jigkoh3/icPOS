import { AuthProvider } from './../auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel, HomeModel, ItemModel } from '../../assets/models/menus.model';
import { ProductModel, PriceModel, SubmenuModel } from '../../assets/models/product.model';
import { OrderModel } from '../../assets/models/order.model';
import _ from 'lodash';
import { Constants } from '../../app/app.contants';

@Injectable()
export class MenuProvider {
  local: any;
  storageName = "0638265946";
  online: boolean = false;
  public homeData: HomeModel;
  constructor(public http: HttpClient, private auth: AuthProvider) {

  }

  getLocalStorage(shopno): Promise<HomeModel> {
    let hearder = this.auth.setHeader();
    return this.http.get(Constants.API_URL + '/api/homes/' + shopno, { headers: hearder })
      .toPromise()
      .then(response => {
        this.homeData = response as HomeModel;
        return this.homeData;
      })
      .catch(this.handleError);
  }

  getMenus(shopno): Promise<HomeModel> {
    return this.getLocalStorage(shopno);

  }

  addMenu(menus: Array<MenuModel>): Promise<HomeModel> {
    this.local = window.localStorage.getItem(this.storageName);
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
    return Promise.reject(error.message || error);
  }

}
