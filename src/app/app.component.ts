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
import { MainMorePage } from '../pages/main-more/main-more';
import { ShopProvider } from '../providers/shop/shop';
import { ShopModel } from '../assets/models/shop.model';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListOfBillPage;

  branchs: Array<any>;
  constructor(private events: Events, private translateService: TranslateService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthProvider, private modalCtrl: ModalController, private shopService: ShopProvider) {
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
      Constants.branchs = this.auth.Uesr().shop.branchs;
      Constants.branchSelected = Constants.branchs[0];
      this.branchs = Constants.branchs;
      this.rootPage = ListOfBillPage;
    } else {
      this.rootPage = PreLoginPage;
    }


  }

  selectBranch(branch) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    Constants.branchSelected = branch;
  }

  addBranch() {
    let opts: any = {
      enableBackdropDismiss: false
    };

    let addBranchModal = this.modalCtrl.create(AddBranchModalPage, {}, opts);
    let shopid = this.auth.Uesr().shop;
    addBranchModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
        this.shopService.crateNewBranch(data, shopid._id).then((resp) => {
          console.log(resp);
          // Constants.branchs = resp.branchs;
          // this.branchs = Constants.branchs;
        }, (err) => {
          console.log(err);
        });
      }
    });
    addBranchModal.present();
  }
}

