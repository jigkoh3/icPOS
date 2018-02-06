import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { ListOfBillPage } from '../pages/list-of-bill/list-of-bill';
import { PreLoginPage } from '../pages/pre-login/pre-login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = PreLoginPage;

  constructor(private events: Events, private translateService: TranslateService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
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
  }
}

