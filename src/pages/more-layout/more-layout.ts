import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemModel, MenuModel } from '../../assets/models/menus.model';
import { MainMorePage } from '../main-more/main-more';
import { HomePage } from '../home/home';
import { LoadingProvider } from '../../providers/loading/loading';
import { MenuProvider } from '../../providers/menu/menu';
import { ListOfBillPage } from '../list-of-bill/list-of-bill';

@IonicPage()
@Component({
  selector: 'page-more-layout',
  templateUrl: 'more-layout.html',
})
export class MoreLayoutPage {
  private actionType: any = {};
  private contentType: any = {};
  menuItemsSelected: Array<ItemModel>;
  menuSelected: String;
  menus: Array<MenuModel>;

  constructor(private menusService: MenuProvider, private loading: LoadingProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.actionType = this.navParams.data;
    this.defaultFirstMenuOfContent(this.actionType);
    this.menus = this.navParams.get('menus');
    this.menuSelected = 'more';
  }

  ionViewDidLoad() {

  }

  defaultFirstMenuOfContent(actionType) {
    switch (actionType.type) {
      case 'sellHistory':
        this.contentType = {};
        break;
      case 'report':
        this.contentType = {};
        break;
      case 'stock':
        this.contentType = {};
        break;
      case 'employee':
      this.contentType = { 'type': 'employee', 'name': 'EMPLOYEE' };
        break;
      case 'moneyManagemnet':
        this.contentType = {};
        break;
      case 'lists':
        this.contentType = {};
        break;
      case 'settings':
        this.contentType = { 'type': 'payment', 'name': 'PAYMENT' };
        break;
      default:
        this.contentType = {};
        break;
    }
  }

  contentTypeSelected(e) {
    this.contentType = e;
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
