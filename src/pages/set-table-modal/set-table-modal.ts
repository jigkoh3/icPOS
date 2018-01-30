import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-set-table-modal',
  templateUrl: 'set-table-modal.html',
})
export class SetTableModalPage {
  private tableNo: number;
  private sizeSelected: string = 'small';
  private shapeSelected: string = 'shape2';

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.tableNo = this.navParams.get('tableNo');
  }

  ionViewDidLoad() {

  }

  saveTable() {
    let tableData: any = {
      tableNo: this.tableNo,
      size: this.sizeSelected,
      shape: this.shapeSelected
    };
    this.viewCtrl.dismiss(tableData);
  }

  validateTableNo(e) {
    if (e <= 64) {
      this.tableNo = e;
    } else {
      this.tableNo = 64;
    }
  }

  selectSize(size) {
    this.sizeSelected = size;
  }

  selectShape(shape) {
    this.shapeSelected = shape;
  }

}
