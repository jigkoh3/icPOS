import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoreLayoutPage } from '../more-layout/more-layout';
import { LoadingProvider } from '../../providers/loading/loading';
import { MenuProvider } from '../../providers/menu/menu';
import { ItemModel, MenuModel } from '../../assets/models/menus.model';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-main-more',
  templateUrl: 'main-more.html',
})
export class MainMorePage {
  menuItemsSelected: Array<ItemModel>;
  menuSelected: String;
  menus: Array<MenuModel>;
  constructor(private menusService: MenuProvider, private loading: LoadingProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.menus = this.navParams.get('menus');
    this.menuSelected = 'more';
  }

  ionViewDidLoad() {

  }

  selectedMenu(type, name) {
    this.navCtrl.setRoot(MoreLayoutPage, { type: type, name: name, menus: this.menus });
  }

  menuItemSelected(menu) {
    this.menuSelected = menu.name;
    if (menu.name === "more") {
      this.navCtrl.setRoot(MainMorePage, { menus: this.menus });
    } else if (menu.name === "list") {
      alert("List");
    } else {
      this.navCtrl.setRoot(HomePage, { menuSelected: this.menuSelected, menuItemsSelected: menu.items, refFooter: true });
    }
  }

}
