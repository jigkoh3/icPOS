import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TableModel, ZoneModel } from '../../assets/models/order.model';

/**
 * Generated class for the ToTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-to-table',
  templateUrl: 'to-table.html',
})
export class ToTablePage {
  _takeAtable: TableModel = new TableModel();
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ToTablePage');
  }
  takeAtable(){
    this._takeAtable.name = "โต๊ะ 1";
    let zone = new ZoneModel();
    zone.name = "โซนด้านหน้า"
    this._takeAtable.zone = zone;
    this.viewCtrl.dismiss(this._takeAtable);
  }
}
