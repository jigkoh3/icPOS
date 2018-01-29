import { Component } from '@angular/core';

@Component({
  selector: 'other-setting',
  templateUrl: 'other-setting.html'
})
export class OtherSettingComponent {
  private openScreen: boolean;

  constructor() {
    this.openScreen = window.localStorage.getItem('openScreen') ? JSON.parse(window.localStorage.getItem('openScreen')) : true;
  }

  setOpenScreen(e) {
    window.localStorage.setItem('openScreen', e);
  }

  policy() {

  }

  pivacy() {

  }

}
