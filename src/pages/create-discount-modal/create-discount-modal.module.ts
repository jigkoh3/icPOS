import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateDiscountModalPage } from './create-discount-modal';

@NgModule({
  declarations: [
    CreateDiscountModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateDiscountModalPage),
  ],
})
export class CreateDiscountModalPageModule {}
