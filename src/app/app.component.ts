import { AddBranchModalPage } from './../pages/add-branch-modal/add-branch-modal';
import { AuthProvider } from './../providers/auth/auth';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { ListOfBillPage } from '../pages/list-of-bill/list-of-bill';
import { PreLoginPage } from '../pages/pre-login/pre-login';
import { Constants } from './app.contants';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListOfBillPage;


  branchs: Array<any>;
  constructor(private events: Events, private translateService: TranslateService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthProvider, private modalCtrl: ModalController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      translateService.addLangs(['en', 'th']);
      translateService.setDefaultLang('en');
      let language = window.localStorage.getItem('language') ? window.localStorage.getItem('language') : 'th';
      translateService.use(language);
      this.events.subscribe('changeLanguage', data => {
        translateService.use(data);
        window.localStorage.setItem('language', data);
      });
    });
    // this.auth.authenticated().then((data) => {
    //   if (data) {
    //     this.rootPage = ListOfBillPage;
    //   } else {
    //     this.rootPage = PreLoginPage;
    //   }
    // }).catch((err) => {
    //   this.rootPage = PreLoginPage;
    // });

    if (this.auth.authenticated()) {
      this.branchs = this.auth.Uesr().shop.branchs;
      Constants.branchSelected = this.branchs[0];
      this.rootPage = ListOfBillPage;
    } else {
      this.rootPage = PreLoginPage;
    }


  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    Constants.branchSelected = page;
    console.log(Constants.branchSelected);
  }

  addBranch() {
    let addBranchModal = this.modalCtrl.create(AddBranchModalPage);
    addBranchModal.onDidDismiss(data => {
      console.log(data);
    });
    addBranchModal.present();
  }
}

