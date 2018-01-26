import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'international-setting',
  templateUrl: 'international-setting.html'
})
export class InternationalSettingComponent {
  private international: any = {};

  constructor(private events: Events) {
    this.international.language = window.localStorage.getItem('language') ? window.localStorage.getItem('language') : 'th';
    this.international.curency = 'THB';
  }

  changeLanguage(e) {
    this.events.publish('changeLanguage', e);
  }

}
