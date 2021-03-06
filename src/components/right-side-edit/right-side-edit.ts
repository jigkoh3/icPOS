import { Component, Output, EventEmitter } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { EditMenuModalPage } from '../../pages/edit-menu-modal/edit-menu-modal';
import { DiscountModalPage } from '../../pages/discount-modal/discount-modal';

@Component({
  selector: 'right-side-edit',
  templateUrl: 'right-side-edit.html'
})
export class RightSideEditComponent {

  @Output() savedMenu: EventEmitter<any> = new EventEmitter<any>();
  private menu: any = {};

  constructor(private modalCtrl: ModalController) {

  }

  openCreateDiscount() {
    let opts: any = {
      enableBackdropDismiss: false
    };
    let createDiscountModal = this.modalCtrl.create(DiscountModalPage, {}, opts);
    createDiscountModal.onDidDismiss(data => {
      if (data) {
        console.log(data);
      }
    });
    createDiscountModal.present();
  }

  openEditMenu() {
    let opts: any = {
      enableBackdropDismiss: false
    };
    let editMenuModal = this.modalCtrl.create(EditMenuModalPage, {}, opts);
    editMenuModal.onDidDismiss(data => {
      if (data) {
        this.menu = data;
      }
    });
    editMenuModal.present();
  }

  saveClick() {
    this.savedMenu.emit(this.menu);
  }

}
