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

  cashierPrinterModal() {
    let productModal = this.modalCtrl.create(PrinterSettingModalPage, { type: 'cashier', name: 'เครื่องพิมพ์แคชเชียร์' });
    productModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    productModal.present();
  }

  invoidTemplateModal() {
    let productModal = this.modalCtrl.create(PrinterSettingModalPage, { type: 'template', name: 'การปรับเปลี่ยนรูปแบบใบเสร็จ' });
    productModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    productModal.present();
  }

  kitchenPrinterModal() {
    let productModal = this.modalCtrl.create(PrinterSettingModalPage, { type: 'kitchen', name: 'เครื่องพิมพ์ครัว' });
    productModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    productModal.present();
  }

}
