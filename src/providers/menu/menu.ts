import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuModel, HomeModel, ItemModel } from '../../assets/models/menus.model';

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

  initShop():HomeModel{
    let home = new HomeModel();
      let menu = new MenuModel();
      let item = new ItemModel();
      menu.name = "เมนู 1";
      menu.icon = "menu";
      menu.items = [];
      for (let i = 0; i < 32; i++) {
        item.type = "none";
        menu.items.push(item);
      }
      home.menus = [];
      home.menus.push(menu);
      
      window.localStorage.setItem(this.storageName, JSON.stringify(home));

      return home;
  }

  getLocalStorage(): HomeModel {
    this.local = window.localStorage.getItem(this.storageName);
    // console.log(this.local);
    if (this.local) {
      let home = JSON.parse(this.local);
      return home;
    } else {
      return this.initShop();
    }
  }

  getMenus(): Promise<HomeModel> {
    // return this.http.get('./assets/json/menus.json')
    // .toPromise()
    // .then(response => response as HomeModel)
    // .catch(this.handleError);

    let home = this.getLocalStorage();
    return new Promise((resolve, reject) => {
      resolve(home);
    });
  }

  addMenu(menus:Array<MenuModel>): Promise<HomeModel> {
    let home = this.getLocalStorage();
    home.menus = menus;
    window.localStorage.setItem(this.storageName, JSON.stringify(home))
    return new Promise((resolve, reject) => {
      resolve(home);
    });
  }

  private handleError(error: any): Promise<any> {
    // this.log.errorService('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
