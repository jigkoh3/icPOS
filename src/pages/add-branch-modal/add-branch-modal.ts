import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddBranchModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-branch-modal',
  templateUrl: 'add-branch-modal.html',
})
export class AddBranchModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBranchModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
