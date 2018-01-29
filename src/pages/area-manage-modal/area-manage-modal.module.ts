import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaManageModalPage } from './area-manage-modal';

@NgModule({
  declarations: [
    AreaManageModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaManageModalPage),
  ],
})
export class AreaManageModalPageModule {}
