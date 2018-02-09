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
      name: 'food',
      icon: 'ai-food'
    }, {
      name: 'cake',
      icon: 'ai-cake'
    }, {
      name: 'coffee',
      icon: 'ai-coffee'
    }, {
      name: 'icecream',
      icon: 'ai-icecream'
    }, {
      name: 'water',
      icon: 'ai-water'
    }, {
      name: 'tea',
      icon: 'ai-tea'
    }, {
      name: 'bread',
      icon: 'ai-bread'
    }, {
      name: 'frenchfries',
      icon: 'ai-frenchfries'
    }, {
      name: 'cheese',
      icon: 'ai-cheese'
    }, {
      name: 'hamberger',
      icon: 'ai-hamberger'
    }, {
      name: 'soup',
      icon: 'ai-soup'
    }, {
      name: 'salad',
      icon: 'ai-salad'
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
