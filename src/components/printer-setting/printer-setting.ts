import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PrinterSettingModalPage } from '../../pages/printer-setting-modal/printer-setting-modal';

@Component({
  selector: 'printer-setting',
  templateUrl: 'printer-setting.html'
})
export class PrinterSettingComponent {

  constructor(private modalCtrl: ModalController) {

  }

  connectionSettingModal() {
    let productModal = this.modalCtrl.create(PrinterSettingModalPage);
    productModal.onDidDismiss(data => {
      console.log(data);
    });
    productModal.present();
  }

}
