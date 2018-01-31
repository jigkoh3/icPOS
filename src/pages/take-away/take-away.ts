import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CustomerModel } from '../../assets/models/order.model';

/**
 * Generated class for the TakeAwayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-take-away',
  templateUrl: 'take-away.html',
})
export class TakeAwayPage {
  _takeAway: CustomerModel = new CustomerModel();
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TakeAwayPage');
  }

  takeAway(){
    this.viewCtrl.dismiss(this._takeAway);
  }

}
