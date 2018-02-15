import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PrinterSettingModalPage } from '../../pages/printer-setting-modal/printer-setting-modal';

@Component({
  selector: 'printer-setting',
  templateUrl: 'printer-setting.html'
})
export class PrinterSettingComponent {
  @Input() settings: any = {};

  constructor(private modalCtrl: ModalController) {

  }

  cashierPrinterModal() {
    let printerModal = this.modalCtrl.create(PrinterSettingModalPage, { settings: this.settings, type: 'cashier', name: 'PRINTER_CASHIER' });
    printerModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    printerModal.present();
  }

  invoidTemplateModal() {
    let printerModal = this.modalCtrl.create(PrinterSettingModalPage, { type: 'template', name: 'INVOID_TEMPLATE' });
    printerModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    printerModal.present();
  }

  kitchenPrinterModal() {
    let printerModal = this.modalCtrl.create(PrinterSettingModalPage, { type: 'kitchen', name: 'PRINTER_KITCHEN' });
    printerModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    printerModal.present();
  }

}
