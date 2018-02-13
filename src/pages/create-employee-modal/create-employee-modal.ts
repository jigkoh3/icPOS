import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-employee-modal',
  templateUrl: 'create-employee-modal.html',
})
export class CreateEmployeeModalPage {
  private userUnderOwner: any = {};
  private roles: string = 'manager';
  private confPassword: string;
  private action: string;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.action = this.navParams.get('action');
    if(this.action == 'edit'){
      this.userUnderOwner = this.navParams.get('emp');
    }
  }

  ionViewDidLoad() {

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  saveEmployee() {
    let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,10})");
    if (mediumRegex.test(this.userUnderOwner.username)) {
      if (this.userUnderOwner.password && this.confPassword) {
        if (this.userUnderOwner.password === this.confPassword) {
          let roles: Array<any> = [];
          roles.push(this.roles);
          this.userUnderOwner.roles = roles;
          this.viewCtrl.dismiss(this.userUnderOwner);
        } else {
          alert('รหัสผ่านไม่ตรงกัน');
        }
      } else {
        alert('กรุณากรอกรหัสผ่านและยืนยันรหัสผ่าน');
      }
    } else {
      alert('ชื่อผู้ใช้ A-Z และ 0-9 เท่านั้น และต้องมีตังอักษรและตัวเลขอย่างน้อย 6-10 ตัว');
    }
  }

}
