import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from '../pages/home/home';
import { ListOfBillPage } from '../pages/list-of-bill/list-of-bill';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(private events: Events, private translateService: TranslateService, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = ListOfBillPage;
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      translateService.addLangs(['en','th']);
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

