import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings-modal',
  templateUrl: 'settings-modal.html',
})
export class SettingsModalPage {
  private title: any = {};

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.data;

  }

  ionViewDidLoad() {

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
