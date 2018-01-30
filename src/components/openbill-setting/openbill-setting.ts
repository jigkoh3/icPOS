import { Component } from '@angular/core';
import { SettingProvider } from '../../providers/setting/setting';
import { ModalController } from 'ionic-angular';
import { AreaManageModalPage } from '../../pages/area-manage-modal/area-manage-modal';

@Component({
  selector: 'openbill-setting',
  templateUrl: 'openbill-setting.html'
})
export class OpenbillSettingComponent {

  private openbillSettingData: any = {};

  constructor(private modalCtrl: ModalController, private settingProvider: SettingProvider) {
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

  openAreaMangeModal() {
    let areaManageModal = this.modalCtrl.create(AreaManageModalPage);
    areaManageModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    areaManageModal.present();
  }

}
