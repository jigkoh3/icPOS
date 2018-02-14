import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MoreLayoutPage } from '../more-layout/more-layout';
import { LoadingProvider } from '../../providers/loading/loading';
import { MenuProvider } from '../../providers/menu/menu';
import { ItemModel, MenuModel } from '../../assets/models/menus.model';
import { HomePage } from '../home/home';
import { ListOfBillPage } from '../list-of-bill/list-of-bill';
import { SettingsModalPage } from '../settings-modal/settings-modal';
import { Constants } from '../../app/app.contants';
import { CreateEmployeeModalPage } from '../create-employee-modal/create-employee-modal';
import { UsersModel } from '../../assets/models/users.model';


@IonicPage()
@Component({
  selector: 'page-main-more',
  templateUrl: 'main-more.html',
})
export class MainMorePage {
  menuItemsSelected: Array<ItemModel>;
  menuSelected: String;
  menus: Array<MenuModel>;
  users: Array<UsersModel> = [];
  private tabs: string = 'setting';
  private branchSelected: any = {};
  private settings: any = {};

  constructor(private modalCtrl: ModalController, private menusService: MenuProvider, private loading: LoadingProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.menus = this.navParams.get('menus');
    this.menuSelected = 'more';
  }

  ionViewDidLoad() {

  }

  getBranchName(){
    this.branchSelected = Constants.branchSelected;
    return this.branchSelected.name;
  }

  editEmpModal(id, emp) {
    let opts: any = {
      enableBackdropDismiss: false
    };
    let editEmpModal = this.modalCtrl.create(CreateEmployeeModalPage, { emp: emp, action: 'edit' }, opts);
    editEmpModal.onDidDismiss(data => {
      if (data) {
        this.users[id] = data;
      }
    });
    editEmpModal.present();
  }

  deleteEmp(id) {
    this.users.splice(id, 1);
  }

  openCreateEmpModal() {
    let opts: any = {
      enableBackdropDismiss: false
    };
    let createEmpModal = this.modalCtrl.create(CreateEmployeeModalPage, { action: 'create' }, opts);
    createEmpModal.onDidDismiss(data => {
      if (data) {
        data.branch = Constants.branchSelected;
        this.users.push(data);
        console.log(this.users);
      }
    });
    createEmpModal.present();
  }

  selectedItem(itemType, itemName) {
    let opts: any = {
      enableBackdropDismiss: false
    };
    let settingModal = this.modalCtrl.create(SettingsModalPage, { type: itemType, name: itemName }, opts);
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
