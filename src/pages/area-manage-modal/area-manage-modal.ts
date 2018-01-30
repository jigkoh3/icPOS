import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SetTableModalPage } from '../set-table-modal/set-table-modal';

@IonicPage()
@Component({
  selector: 'page-area-manage-modal',
  templateUrl: 'area-manage-modal.html',
})
export class AreaManageModalPage {
  private areaName: string;
  private tables: Array<any> = [];

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }

  openSetTableModal() {
    let openSetTable = this.modalCtrl.create(SetTableModalPage, { areaName: this.areaName, tableNo: this.tables.length <= 0 ? 1 : this.tables.length + 1 });
    openSetTable.onDidDismiss(data => {
      if (data) {
        this.tables.push(data);
        console.log(this.tables);
      }
    });
    openSetTable.present();
  }

}
