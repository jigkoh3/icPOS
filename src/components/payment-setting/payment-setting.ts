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

  text: string;

  constructor() {
    console.log('Hello PaymentSettingComponent Component');
    this.text = 'Hello World';
  }

}
