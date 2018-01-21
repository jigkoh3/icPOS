import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-order',
  templateUrl: 'product-order.html',
})
export class ProductOrderPage {
  item: any;
  step: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    console.log(this.item);
  }

  next() {
    this.step += 1;
  }

  prev() {
    if(this.step > 0){
      this.step -= 1;
    }
  }

}
