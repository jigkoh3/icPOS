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
  private tablesOfArea: Array<any> = [];

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }

  getTableLengthOfArea(): number {
    let countTable: number;
    if (this.tablesOfArea.length <= 0) {
      countTable = 1;
    } else {
      countTable = 1;
      for (let i = 0; i < this.tablesOfArea.length; i++) {
        if (this.areaName == this.tablesOfArea[i].areaName) {
          countTable = this.tablesOfArea[i].tables ? this.tablesOfArea[i].tables.length + 1 : 1;
          break;
        }
      }
    }
    return countTable;
  }

  openSetTableModal() {
    let openSetTable = this.modalCtrl.create(SetTableModalPage, { tableNo: this.getTableLengthOfArea() });
    openSetTable.onDidDismiss(data => {
      if (data) {
        let tables: Array<any> = [];
        if (this.tablesOfArea.length <= 0) {
          tables.push(data);
          this.tablesOfArea.push({
            areaName: this.areaName,
            tables: tables
          });
        } else {
          let index = this.tablesOfArea.findIndex(e => e.areaName == this.areaName);
          if (index == -1) {
            tables.push(data);
            this.tablesOfArea.push({
              areaName: this.areaName,
              tables: tables
            });
          } else {
            for (let i = 0; i < this.tablesOfArea.length; i++) {
              if (this.areaName == this.tablesOfArea[i].areaName) {
                tables = this.tablesOfArea[i].tables;
                tables.push(data);
                this.tablesOfArea[i].tables = tables;
                break;
              }
            }
          }
        }
      }

      console.log(this.tablesOfArea);
    });
    openSetTable.present();
  }

}
