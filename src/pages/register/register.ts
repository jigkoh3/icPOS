import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { HomePage } from '../home/home';
import { ListOfBillPage } from '../list-of-bill/list-of-bill';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private mobile: string;

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  register() {
    this.auth.signup({ username: this.mobile }).then(data => {
      this.navCtrl.setRoot(ListOfBillPage);
    }).catch(err => { });
  }

}
