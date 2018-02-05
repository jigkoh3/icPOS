import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-discount-modal',
  templateUrl: 'discount-modal.html',
})
export class DiscountModalPage {
  private discount: any = {};
  private ratetypePercent: boolean = true;
  private ratetypeFix: boolean = false;
  private percent: number;
  private fixamount: number;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.discount.type = 'DISC';
  }

  changePercentType(e) {
    if (e == this.ratetypeFix) {
      this.ratetypeFix = false;
      this.discount.fixamount = null;
      this.discount.ratetype = 'PERC';      
    }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  changeFixType(e) {
    if (e == this.ratetypePercent) {
      this.ratetypePercent = false;
      this.discount.percent = null;
      this.discount.ratetype = 'FIX';
    }
  }

  saveDiscount() {
    console.log(this.discount);
  }

}
