import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductOrderPage } from './product-order';

@NgModule({
  declarations: [
    ProductOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductOrderPage),
  ],
})
export class ProductOrderPageModule {}
