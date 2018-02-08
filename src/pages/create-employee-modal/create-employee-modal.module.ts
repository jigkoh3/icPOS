import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateEmployeeModalPage } from './create-employee-modal';

@NgModule({
  declarations: [
    CreateEmployeeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateEmployeeModalPage),
  ],
})
export class CreateEmployeeModalPageModule {}
