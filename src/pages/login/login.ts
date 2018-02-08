import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { HomePage } from '../home/home';
import { ListOfBillPage } from '../list-of-bill/list-of-bill';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private credential: any = {};
  private mobile: string;
  private loginType: string = 'owner';

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  ownerLogin(username, password) {
    let credential = {
      username: this.mobile,
      password: this.mobile
    };
    this.auth.login(credential).then(data => {
      this.navCtrl.setRoot(ListOfBillPage);
    }).catch(err => {
      console.log(err);
    });
  }

  employeeLogin() {
    this.auth.login(this.credential).then(data => {
      this.navCtrl.setRoot(ListOfBillPage);
    }).catch(err => {
      console.log(err);
    });
  }

}
