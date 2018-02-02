import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TableModel, ZoneModel } from '../../assets/models/order.model';
import { MenuProvider } from '../../providers/menu/menu';

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
  tables: Array<TableModel> = [];
  zone:string;
  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuService: MenuProvider) {
    this.tables = menuService.homeData.tables;
    if(this.tables && this.tables.length > 0){
      this.zone = this.tables[0].zone;
    }
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad ToTablePage');
  }
  takeAtable(table) {
    this.viewCtrl.dismiss(table);
  }
}
