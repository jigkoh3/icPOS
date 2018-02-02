import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuModel } from '../../assets/models/menus.model';
import { MainMorePage } from '../main-more/main-more';
import { HomePage } from '../home/home';
import { LoadingProvider } from '../../providers/loading/loading';
import { MenuProvider } from '../../providers/menu/menu';
import { OrderModel, TableModel } from '../../assets/models/order.model';
import { OrderProvider } from '../../providers/order/order';

/**
 * Generated class for the ListOfBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-of-bill',
  templateUrl: 'list-of-bill.html',
})
export class ListOfBillPage {
  menus: Array<MenuModel>;
  menuSelected: String;
  bills: Array<OrderModel>;
  tables: Array<TableModel> = [];
  zone:string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private menusService: MenuProvider,
    private orderService: OrderProvider,
    private loading: LoadingProvider,) {
    //this.menus = this.navParams.get('menus');
    //this.getMenuData();
    this.menuSelected = 'list';
    this.zone = "bills";
    if (!this.menusService.homeData) {
      this.getMenuData();
    } else {
      this.menus = menusService.homeData.menus;
      this.bills = menusService.homeData.bills;
      this.tables = menusService.homeData.tables;
    }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ListOfBillPage');
  }

  gotoHome(bill:OrderModel){
    if(bill){
      console.log(bill);
      this.orderService.order = bill.items;
    }
    
    this.navCtrl.setRoot(HomePage);
  }

  getMenuData() {
    this.loading.onLoading();
    setTimeout(() => {
      this.menusService.getMenus().then(data => {
        // console.log(data);
        this.menus = data.menus;
        this.bills = data.bills;
        this.tables = data.tables;
        this.loading.dismiss();
      }, err => {
        // console.log(err);
        this.loading.dismiss();
      })
    }, 1000);

  }

  menuItemSelected(menu) {
    this.menuSelected = menu.name;
    if (menu.name === "more") {
      this.navCtrl.setRoot(MainMorePage, { menus: this.menus });
    } else if (menu.name === "list") {
      this.navCtrl.setRoot(ListOfBillPage, { menus: this.menus });
    } else {
      this.navCtrl.setRoot(HomePage, { menuSelected: this.menuSelected, menuItemsSelected: menu.items, refFooter: true });
    }
  }

}
