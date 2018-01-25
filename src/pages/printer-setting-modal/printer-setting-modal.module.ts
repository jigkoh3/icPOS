import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrinterSettingModalPage } from './printer-setting-modal';

@NgModule({
  declarations: [
    PrinterSettingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PrinterSettingModalPage),
  ],
})
export class PrinterSettingModalPageModule {}
