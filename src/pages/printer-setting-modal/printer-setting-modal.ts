import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-printer-setting-modal',
  templateUrl: 'printer-setting-modal.html',
})
export class PrinterSettingModalPage {
  private cashierPrinter: any = {};
  private settingType: any = {};
  private kitchenPrinter: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.settingType = this.navParams.data;
    this.cashierPrinter.type = 'wifi';
    this.cashierPrinter.printerMode = '58MM';
    this.kitchenPrinter.printerMode = '58MM';
  }

  ionViewDidLoad() {

  }

  connect() {
    console.log(this.cashierPrinter);
  }

  saveTemplate() {

  }

  saveKitchenPrinter() {
    console.log(this.kitchenPrinter);
  }

  deleteKitchenPrinter() {

  }

}
