import { Component } from '@angular/core';
import { SettingProvider } from '../../providers/setting/setting';


@Component({
  selector: 'payment-setting',
  templateUrl: 'payment-setting.html'
})
export class PaymentSettingComponent {
  private paymentSettingData: any = {};
  private serviceCharge: any = {};
  private vat: any = {};
  private vatFromVisible: boolean;
  private round: string;
  private serviceChargeFromVisible: boolean;

  constructor(private settingProvider: SettingProvider) {
    this.init();
  }

  init() {
    this.settingProvider.getPaymentSetting().then(data => {
      this.paymentSettingData = data;
      this.vat = this.paymentSettingData.vat ? this.paymentSettingData.vat : { isVat: false };
      this.vatFromVisible = this.vat.isVat;
      this.serviceCharge = this.paymentSettingData.serviceCharge ? this.paymentSettingData.serviceCharge : { setProductPrice: 'includeServiceCharge' };
      this.serviceChargeFromVisible = this.serviceCharge.isServiceCharge;
      this.round = this.paymentSettingData.round ? this.paymentSettingData.round : 'no';
    }).catch(err => {
      console.log(err);
    });
  }

  setViewVatForm(e) {
    this.vatFromVisible = e;
  }

  setViewServiceChargeForm(e) {
    this.serviceChargeFromVisible = e;
  }

  saveData() {
    this.paymentSettingData = {
      vat: this.vat,
      serviceCharge: this.serviceCharge,
      round: this.round
    };

    this.settingProvider.savePaymentSetting(this.paymentSettingData).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

}
