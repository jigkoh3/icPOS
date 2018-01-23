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
  }

  ionViewDidLoad() {
    this.getMenuData();
  }

  selectedMenu(type, name) {
    this.navCtrl.push(MoreLayoutPage, { type: type, name: name });
  }

  getMenuData() {
    this.loading.onLoading();
    setTimeout(() => {
      this.menusService.getMenus().then(data => {
        this.menus = data.menus;
        this.menuSelected = 'more';
        this.loading.dismiss();
      }, err => {
        this.loading.dismiss();
      })
    }, 1000);
  }

  menuItemSelected(menu) {
    this.menuSelected = menu.name;
    if (menu.name === "more") {
      // this.app.getRootNav().setRoot(MainMorePage);
      this.navCtrl.setRoot(MainMorePage);
    }
    if (menu.name === "list") {
      alert("List");
    }
    this.navCtrl.setRoot(HomePage, { menuSelected: this.menuSelected, menuItemsSelected: menu.items, refFooter: true });
  }

}
