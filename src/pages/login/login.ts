import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { ListOfBillPage } from '../list-of-bill/list-of-bill';
import { LoadingProvider } from '../../providers/loading/loading';
//import { MessageProvider } from '../../providers/message';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private credential: any = {};
  private mobile: string;
  private loginType: string = 'owner';

  constructor(private auth: AuthProvider, 
    private navCtrl: NavController, 
    private navParams: NavParams,
    private loading: LoadingProvider
  ) {
  }

  ionViewDidLoad() {

  }

  ownerLogin(username, password) {
    let credential = {
      username: this.mobile,
      password: this.mobile
    };
    this.loading.onLoading();
    this.auth.login(credential).then(data => {
      this.loading.dismiss();
      this.navCtrl.setRoot(ListOfBillPage);
    }).catch(err => {
      this.loading.dismiss();
    });
  }

  employeeLogin() {
    this.loading.onLoading();
    this.auth.login(this.credential).then(data => {
      this.loading.dismiss();
      this.navCtrl.setRoot(ListOfBillPage);
    }).catch(err => {
      this.loading.dismiss();
    });
  }

}
