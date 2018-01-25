import { Component } from '@angular/core';
import { SettingProvider } from '../../providers/setting/setting';

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

  constructor(private settingProvider: SettingProvider) {
    this.init();
  }

  init() {
    this.settingProvider.getOpenbillSetting().then(data => {
      this.openbillSettingData = data;
    }).catch(err => {
      console.log(err);
    });
  }

  saveData() {
    this.settingProvider.saveOpenbillSetting(this.openbillSettingData).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

}
