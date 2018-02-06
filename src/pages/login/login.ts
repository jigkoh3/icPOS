import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private credential: any = {};
  private mobile: string;
  private loginType: string = 'owner';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  ownerLogin() {
    console.log(this.mobile);
  }

  employeeLogin() {
    console.log(this.credential);
  }

}
