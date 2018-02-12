import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MoreLayoutPage } from '../more-layout/more-layout';
import { LoadingProvider } from '../../providers/loading/loading';
import { MenuProvider } from '../../providers/menu/menu';
import { ItemModel, MenuModel } from '../../assets/models/menus.model';
import { HomePage } from '../home/home';
import { ListOfBillPage } from '../list-of-bill/list-of-bill';
import { SettingsModalPage } from '../settings-modal/settings-modal';


@IonicPage()
@Component({
  selector: 'page-main-more',
  templateUrl: 'main-more.html',
})
export class MainMorePage {
  menuItemsSelected: Array<ItemModel>;
  menuSelected: String;
  menus: Array<MenuModel>;
  private tabs: string = 'setting';
  constructor(private modalCtrl: ModalController, private menusService: MenuProvider, private loading: LoadingProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.menus = this.navParams.get('menus');
    this.menuSelected = 'more';
  }

  ionViewDidLoad() {

  }

  selectedItem(itemType, itemName) {
    let settingModal = this.modalCtrl.create(SettingsModalPage, { type: itemType, name: itemName });
    settingModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    settingModal.present();
  }

  selectedMenu(type, name) {
    this.navCtrl.setRoot(MoreLayoutPage, { type: type, name: name, menus: this.menus });
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
