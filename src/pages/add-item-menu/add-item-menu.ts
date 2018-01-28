import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { ItemModel } from '../../assets/models/menus.model';
import { ProductModel, PriceModel } from '../../assets/models/product.model';

/**
 * Generated class for the AddItemMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item-menu',
  templateUrl: 'add-item-menu.html',
})
export class AddItemMenuPage {
  step:number = 0;
  item:ItemModel = new ItemModel();
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.step =0;
  }

  addNewItem(type) {
    this.item.type = type;
    this.item.product = new ProductModel();
    this.item.product.prices = [];
    let price = new PriceModel();
    price.type = "normal";
    price.name = "ราคาปกติ";
    this.item.product.prices.push(price);
    this.step = 1;
  }

  prev() {
    if (this.step > 0) {
      this.step --;
    }
  }

  add(){
    console.log(this.item);
    this.viewCtrl.dismiss(this.item);
  }

}
