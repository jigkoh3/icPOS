import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductModel } from '../../assets/models/product.model';

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
  item: ProductModel;
  step: number = 0;
  steps = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.steps = this.calculatestep();
    console.log(this.steps);
  }

  calculatestep():Array<any> {
    let steps = [];
    if (this.item.prices.length > 1) {
       steps.push({
        name: "price",
        type: "price"
      })

    }
    this.item.submenus.forEach(function (sub) {
      steps.push({
        name: sub.name,
        type: "submenu",
        data: sub
      })
    });

    return steps;
  }

  next() {
    this.step += 1;
  }

  prev() {
    if (this.step > 0) {
      this.step -= 1;
    }
  }

  add(){
    alert("Finish");
  }

}
