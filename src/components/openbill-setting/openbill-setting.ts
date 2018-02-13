import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { AreaManageModalPage } from '../../pages/area-manage-modal/area-manage-modal';

@Component({
  selector: 'openbill-setting',
  templateUrl: 'openbill-setting.html'
})
export class OpenbillSettingComponent {

  @Input() settings: any = {};

  constructor(private modalCtrl: ModalController) {
    
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
