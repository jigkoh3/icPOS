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
  constructor(public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuService: MenuProvider) {
    this.tables = menuService.homeData.tables;
  }

  getTables() {

    // for(let z=0;z<2;z++){

    //   for(let i=0;i<20;i++){
    //     let table = new TableModel();
    //     table.name = "โต๊ะ " + i;
    //     table.zone = "โซน " + z;;
    //     this.tables.push(table);
    //   }
    // }

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ToTablePage');
  }
  takeAtable(table) {
    
    this.viewCtrl.dismiss(table);
  }
}
