import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { GridComponent } from './grid/grid';
import { RightSideOrderComponent } from './right-side-order/right-side-order';
import { RightSideEditComponent } from './right-side-edit/right-side-edit';
import { PreloadImageComponent } from './preload-image/preload-image';
import { ItemGridComponent } from './item-grid/item-grid';
import { ProductOrderComponent } from './product-order/product-order';
import { SettingsSideNavComponent } from './settings-side-nav/settings-side-nav';
import { PaymentSettingComponent } from './payment-setting/payment-setting';
import { OpenbillSettingComponent } from './openbill-setting/openbill-setting';
import { PrinterSettingComponent } from './printer-setting/printer-setting';
import { ShopHistorySettingComponent } from './shop-history-setting/shop-history-setting';
import { InternationalSettingComponent } from './international-setting/international-setting';
import { GridEditComponent } from './grid-edit/grid-edit';
import { FooterEditComponent } from './footer-edit/footer-edit';
import { OtherSettingComponent } from './other-setting/other-setting';
@NgModule({
	declarations: [FooterComponent,
    GridComponent,
    RightSideOrderComponent,
    RightSideEditComponent,
    PreloadImageComponent,
    ItemGridComponent,
    ProductOrderComponent,
    SettingsSideNavComponent,
    PaymentSettingComponent,
    OpenbillSettingComponent,
    PrinterSettingComponent,
    ShopHistorySettingComponent,
    InternationalSettingComponent,
    GridEditComponent,
    FooterEditComponent,
    OtherSettingComponent],
	imports: [],
	exports: [FooterComponent,
    GridComponent,
    RightSideOrderComponent,
    RightSideEditComponent,
    PreloadImageComponent,
    ItemGridComponent,
    ProductOrderComponent,
    SettingsSideNavComponent,
    PaymentSettingComponent,
    OpenbillSettingComponent,
    PrinterSettingComponent,
    ShopHistorySettingComponent,
    InternationalSettingComponent,
    GridEditComponent,
    FooterEditComponent,
    OtherSettingComponent]
})
export class ComponentsModule {}
