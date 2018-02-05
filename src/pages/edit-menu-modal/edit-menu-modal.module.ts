import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMenuModalPage } from './edit-menu-modal';

@NgModule({
  declarations: [
    EditMenuModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMenuModalPage),
  ],
})
export class EditMenuModalPageModule {}
