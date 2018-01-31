import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OpenRoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-round',
  templateUrl: 'open-round.html',
})
export class OpenRoundPage {
  startmoney:number=2000;
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad OpenRoundPage');
  }

  openRound(){
    this.viewCtrl.dismiss(this.startmoney);
  }

}
