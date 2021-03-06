import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { ListOfBillPage } from '../list-of-bill/list-of-bill';
import { LoadingProvider } from '../../providers/loading/loading';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private mobile: string;

  constructor(private auth: AuthProvider, 
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private loading: LoadingProvider) {
  }

  ionViewDidLoad() {
  }

  register() {
    this.loading.onLoading();
    this.auth.signup({ username: this.mobile }).then(data => {
      this.navCtrl.setRoot(ListOfBillPage);
      this.loading.dismiss();
    }).catch(err => { 
      this.loading.dismiss();
    });
  }

}
