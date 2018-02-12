import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Constants } from '../../app/app.contants';

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
  branchs: Array<any>;
  branch: any = {};
  itemSelected: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private auth: AuthProvider) {
    this.branchs = this.auth.Uesr().shop.branchs;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBranchModalPage');
  }

  saveBranch() {
    this.viewCtrl.dismiss(this.branch);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
