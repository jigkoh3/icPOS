import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel, HomeModel, ItemModel } from '../../assets/models/menus.model';
import { ProductModel, PriceModel, SubmenuModel } from '../../assets/models/product.model';

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
  constructor(public http: HttpClient) {

  }


  getLocalStorage(): Promise<HomeModel> {
    this.local = window.localStorage.getItem(this.storageName);
    // console.log(this.local);
    if (this.local) {
      let home = JSON.parse(this.local);
      return new Promise((resolve, reject) => {
        resolve(home);
      });
    } else {
      return this.http.get('./assets/json/menus.json')
        .toPromise()
        .then(response => {
          window.localStorage.setItem(this.storageName, JSON.stringify(response));
          return response;
        })
        .catch(this.handleError);
    }
  }

  getMenus(): Promise<HomeModel> {

    return this.getLocalStorage();

  }

  addMenu(menus: Array<MenuModel>): Promise<HomeModel> {
    this.local = window.localStorage.getItem(this.storageName);
    // console.log(this.local);
    if (this.local) {
      let home = JSON.parse(this.local);
      home.menus = menus;
      window.localStorage.setItem(this.storageName, JSON.stringify(home));
      return new Promise((resolve, reject) => {
        resolve(home);
      });
    }
  }

  private handleError(error: any): Promise<any> {
    // this.log.errorService('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
