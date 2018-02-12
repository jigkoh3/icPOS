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
  branchSelected: any;
  branch: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, ) {
    this.branchSelected = Constants.branchSelected;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBranchModalPage');
  }

  saveBranch() {
    this.viewCtrl.dismiss(this.branch);
    console.log(this.branch);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  selectBranch(e) {
    this.branch.branchSelected = e;
    // console.log(e);
  }

}
