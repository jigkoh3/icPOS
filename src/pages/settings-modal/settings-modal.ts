import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsModel } from '../../assets/models/settings.model';
import { SettingProvider } from '../../providers/setting/setting';

@IonicPage()
@Component({
  selector: 'page-settings-modal',
  templateUrl: 'settings-modal.html',
})
export class SettingsModalPage {
  private title: any = {};
  private settings: SettingsModel;

  constructor(private settingService: SettingProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.data;
    this.initSetting();
  }

  ionViewDidLoad() {

  }

  initSetting() {
    this.settingService.getSettings().then(data => {
      this.settings = data;
    }).catch(err => {
      console.log(err);
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
