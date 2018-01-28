import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemMenuPage } from './add-item-menu';

@NgModule({
  declarations: [
    AddItemMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemMenuPage),
  ],
})
export class AddItemMenuPageModule {}
