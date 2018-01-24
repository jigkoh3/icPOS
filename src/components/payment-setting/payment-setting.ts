import { Component } from '@angular/core';

/**
 * Generated class for the PaymentSettingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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

  constructor() {
    this.serviceCharge.setProductPrice = 'includeServiceCharge';
    this.round = 'no';
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
    console.log(this.paymentSettingData);
  }

}
