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
    }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  changeFixType(e) {
    if (e == this.ratetypePercent) {
      this.ratetypePercent = false;
    }
  }

  saveDiscount() {
    console.log(this.discount);
  }

}
