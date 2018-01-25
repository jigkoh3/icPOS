import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-printer-setting-modal',
  templateUrl: 'printer-setting-modal.html',
})
export class PrinterSettingModalPage {
  private cashierPrinter : string = 'wifi';
  private printerMode : string = '58MM';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

}
