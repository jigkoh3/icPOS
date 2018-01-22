import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductModel, SubmenuModel } from '../../assets/models/product.model';
import { OrderItemModel } from '../../assets/models/order.model';

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
  result:OrderItemModel;
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.steps = this.calculatestep();
    this.result = new OrderItemModel();
    this.result.product = new ProductModel();
    this.result.product.name = this.item.name;
    this.result.product.category = this.item.category;
    this.result.product.description = this.item.description;
    this.result.product.image = this.item.image;
    this.result.product.prices = [];
    this.result.product.submenus =[];
    this.result.total = 0;
    this.result.qty = 1;
    //console.log(this.result);
  }

  calculatestep():Array<any> {
    let steps = [];
    if (this.item.prices.length > 1) {
       steps.push({
        name: "price",
        type: "price",
        data: this.item.prices,
        result:null
      })

    }
    this.item.submenus.forEach(function (sub) {
      steps.push({
        name: sub.name,
        type: "submenu",
        data: sub,
        result: null
      })
    });

    return steps;
  }

  next() {
    //console.log(this.result);
    this.updateOrderItem(this.step)
    this.step += 1;
    //console.log(this.steps);
    
  }

  prev() {
    if (this.step > 0) {
      this.step -= 1;
    }
    //console.log(this.steps);
  }

  add(){
    this.updateOrderItem(this.step)
    this.viewCtrl.dismiss(this.result);
  }

  updateOrderItem(step){
    let _step = this.steps[step];
    let _result = this.result;

    switch (_step.type) {
      case "price": {
        //statements; 
        _result.product.prices = [];
        _step.data.forEach(function(_price){
          if(_price.name === _step.result){
            _result.product.prices.push(_price);
            _result.total += _price.price;
          }
        });
        
        break;
      }
      case "submenu": {
        //statements;
        let _submenu = new SubmenuModel();
        _submenu.name = _step.data.name;
        _submenu.prices = [];

        _step.data.prices.forEach(function(_price){
          if(_price.name === _step.result){
            _submenu.prices.push(_price);
            _result.total += _price.price;
          }
        });
        let i=0;
        _result.product.submenus.forEach(function(sub){
          if(sub.name === _step.name){
            _result.product.submenus.splice(i);
          }
          i++;
        });
        _result.product.submenus.push(_submenu);
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
    this.result = _result;
    //console.log(this.result);
  }

}
