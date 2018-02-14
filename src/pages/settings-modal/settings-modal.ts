import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsModel, PaymentModel, VatModel, OpenbillModel } from '../../assets/models/settings.model';
import { SettingProvider } from '../../providers/setting/setting';
import { Constants } from '../../app/app.contants';
import { ServiceChargeModel } from '../../assets/models/payment_setting.model';

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
    if (Constants.branchSelected) {
      if (Constants.branchSelected.settings) {
        this.settings = Constants.branchSelected.settings;
      } else {
        console.log('pass new Object');
        this.settings = new SettingsModel();
        this.settings.payment = new PaymentModel();
        this.settings.payment.vat = new VatModel();
        this.settings.serviceCharge = new ServiceChargeModel();
        this.settings.round = 'no';

        this.settings.openbill = new OpenbillModel();
        console.log(this.settings.openbill);
      }
    }
  }

  saveSettings(){
    Constants.branchSelected.settings = this.settings;
    this.viewCtrl.dismiss(this.settings);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
