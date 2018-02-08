import { Component } from '@angular/core';
import { CreateEmployeeModalPage } from '../../pages/create-employee-modal/create-employee-modal';
import { ModalController } from 'ionic-angular';
import { SettingProvider } from '../../providers/setting/setting';

@Component({
  selector: 'employee-side-nav',
  templateUrl: 'employee-side-nav.html'
})
export class EmployeeSideNavComponent {

  constructor(private settingService: SettingProvider, private modalCtrl: ModalController) {
  }

  addEmployee() {
    let opts: any = {
      enableBackdropDismiss: false
    };
    let employeeModal = this.modalCtrl.create(CreateEmployeeModalPage, {}, opts);
    employeeModal.onDidDismiss(data => {
      if (data) {
        this.settingService.createEmployee(data).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      }
    });
    employeeModal.present();
  }

}
