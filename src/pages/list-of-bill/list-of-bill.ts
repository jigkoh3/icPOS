import { Constants } from './../../app/app.contants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';
import { MenuModel } from '../../assets/models/menus.model';
import { MainMorePage } from '../main-more/main-more';
import { HomePage } from '../home/home';
import { LoadingProvider } from '../../providers/loading/loading';
import { MenuProvider } from '../../providers/menu/menu';
import { OrderModel, TableModel } from '../../assets/models/order.model';
import { OrderProvider } from '../../providers/order/order';
import { AuthProvider } from '../../providers/auth/auth';

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
  zone: string;
  //branchs: Array<any>;
  branchSelected: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    private menusService: MenuProvider,
    private orderService: OrderProvider,
    private loading: LoadingProvider,
    private popoverCtrl: PopoverController) {
    this.menuSelected = 'list';

    //this.branchs = this.auth.Uesr().shop.branchs;
    this.branchSelected = Constants.branchSelected;
    if (!this.menusService.homeData) {
      this.getMenuData();
    } else {
      this.menus = menusService.homeData.menus;
      this.bills = menusService.homeData.bills;
      this.tables = menusService.homeData.tables;
      this.zone = "all";
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOfBillPage');
    console.log(this.menusService.homeData);
  }

  selecttab(key) {
    console.log(key);
    this.zone = key;
  }

  gotoHome(bill: OrderModel) {
    if (bill) {
      //console.log(bill);
      this.orderService.order = bill;
    }else{
      this.orderService.order = new OrderModel();
      this.orderService.order.items = [];
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
        this.zone = "all";
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

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverBranchPage, { branchs: this.branchSelected });
    popover.onDidDismiss(data => {
      if (data) {
        this.branchSelected = data;
        console.log(this.branchSelected);
      }
    });
    popover.present({
      ev: myEvent
    });
  }

}

@Component({
  template: `
    <ion-searchbar></ion-searchbar>
    <ion-list>
      <ion-item  *ngFor="let item of items" (click)="selected(item)">{{ item.name }}</ion-item>
    </ion-list>
  `
})
export class PopoverBranchPage {
  items: Array<any>;
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.items = this.navParams.get('branchs');
  }

  selected(item) {
    //  console.log(item);
    this.viewCtrl.dismiss(item);
  }
}
