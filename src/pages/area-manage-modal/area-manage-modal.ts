import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SetTableModalPage } from '../set-table-modal/set-table-modal';

@IonicPage()
@Component({
  selector: 'page-area-manage-modal',
  templateUrl: 'area-manage-modal.html',
})
export class AreaManageModalPage {

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }

  openSetTableModal() {
    let openSetTable = this.modalCtrl.create(SetTableModalPage);
    openSetTable.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    openSetTable.present();
  }

}
