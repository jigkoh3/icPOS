import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfBillPage } from './list-of-bill';

@NgModule({
  declarations: [
    ListOfBillPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfBillPage),
  ],
})
export class ListOfBillPageModule {}
