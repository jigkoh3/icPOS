import { Component } from '@angular/core';

/**
 * Generated class for the OpenbillSettingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'openbill-setting',
  templateUrl: 'openbill-setting.html'
})
export class OpenbillSettingComponent {

  private openbillSettingData: any = {};

  constructor() {

  }

  saveData() {
    console.log(this.openbillSettingData);
  }

}
