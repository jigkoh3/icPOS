import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainMorePage } from './main-more';

@NgModule({
  declarations: [
    MainMorePage,
  ],
  imports: [
    IonicPageModule.forChild(MainMorePage),
  ],
})
export class MainMorePageModule {}
