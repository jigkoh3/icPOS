import { Component, Input } from '@angular/core';


@Component({
  selector: 'payment-setting',
  templateUrl: 'payment-setting.html'
})
export class PaymentSettingComponent {
  @Input() settings: any = {};

  constructor() {
    
  }

}
