import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakeAwayPage } from './take-away';

@NgModule({
  declarations: [
    TakeAwayPage,
  ],
  imports: [
    IonicPageModule.forChild(TakeAwayPage),
  ],
})
export class TakeAwayPageModule {}
