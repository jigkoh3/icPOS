import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-discount-modal',
  templateUrl: 'create-discount-modal.html',
})
export class CreateDiscountModalPage {
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

  changeFixType(e) {
    if (e == this.ratetypePercent) {
      this.ratetypePercent = false;
    }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  saveDiscount() {

  }

}
