import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBranchModalPage } from './add-branch-modal';

@NgModule({
  declarations: [
    AddBranchModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBranchModalPage),
  ],
})
export class AddBranchModalPageModule {}
