import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-menu-modal',
  templateUrl: 'edit-menu-modal.html',
})
export class EditMenuModalPage {
  private menu: any = {};
  private iconSelected: string;
  private iconList: Array<any> = [];

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.loadIconService();
  }

  loadIconService() {
    this.iconList = [{
      name: 'ice-cream',
      icon: 'ice-cream'
    }, {
      name: 'logo-apple',
      icon: 'logo-apple'
    }, {
      name: 'baseball',
      icon: 'baseball'
    }, {
      name: 'beer',
      icon: 'beer'
    }, {
      name: 'cafe',
      icon: 'cafe'
    }, {
      name: 'football',
      icon: 'football'
    }];
  }

  selectIcon(name) {
    this.iconSelected = name;
  }

  saveMenu() {
    this.menu.icon = this.iconSelected;
    let items: Array<any> = [];
    for (let i = 0; i < 32; i++) {
      items.push({
        type: 'none'
      });
    }
    this.menu.items = items;
    this.viewCtrl.dismiss(this.menu);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
