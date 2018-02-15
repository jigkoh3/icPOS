import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from '../../app/app.contants';

@IonicPage()
@Component({
  selector: 'page-printer-setting-modal',
  templateUrl: 'printer-setting-modal.html',
})
export class PrinterSettingModalPage {
  private settings: any = {};
  private settingType: any = {};
  private kitchenPrinter: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.settingType = this.navParams.data;
    this.settings = this.navParams.get('settings');
    this.settings.cashierPrinter.type = 'wifi';
    this.settings.cashierPrinter.printerMode = this.settings.cashierPrinter.printerMode ? this.settings.cashierPrinter.printerMode : '58MM';
    this.kitchenPrinter.printerMode = '58MM';
  }

  ionViewDidLoad() {

  }

  connect() {
    Constants.branchSelected.settings = this.settings;
    console.log(this.settings);
  }

  saveTemplate() {

  }

  saveKitchenPrinter() {
    console.log(this.kitchenPrinter);
  }

  deleteKitchenPrinter() {

  }

}
