import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-more-layout',
  templateUrl: 'more-layout.html',
})
export class MoreLayoutPage {
  private actionType: any = {};
  private contentType: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.actionType = this.navParams.data;
    this.defaultFirstMenuOfContent(this.actionType);
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
        this.contentType = {};
        break;
      case 'moneyManagemnet':
        this.contentType = {};
        break;
      case 'lists':
        this.contentType = {};
        break;
      case 'settings':
        this.contentType = { 'type': 'settings', 'name': 'SETTINGS' };
        break;
      default:
        this.contentType = {};
        break;
    }
  }

  contentTypeSelected(e) {
    this.contentType = e;
  }

}
