import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FooterComponent } from '../components/footer/footer';
import { GridComponent } from '../components/grid/grid';
import { RightSideOrderComponent, PopoverPage } from '../components/right-side-order/right-side-order';
import { RightSideEditComponent } from '../components/right-side-edit/right-side-edit';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuProvider } from '../providers/menu/menu';
import { LoadingProvider } from '../providers/loading/loading';
import { PreloadImageComponent } from '../components/preload-image/preload-image';
import { ItemGridComponent } from '../components/item-grid/item-grid';
import { ProductOrderComponent } from '../components/product-order/product-order';
import { ProductOrderPage } from '../pages/product-order/product-order';
import { OrderProvider } from '../providers/order/order';
import { MainMorePage } from '../pages/main-more/main-more';
import { MoreLayoutPage } from '../pages/more-layout/more-layout';
import { SettingsSideNavComponent } from '../components/settings-side-nav/settings-side-nav';
import { PaymentSettingComponent } from '../components/payment-setting/payment-setting';
import { OpenbillSettingComponent } from '../components/openbill-setting/openbill-setting';
import { PrinterSettingComponent } from '../components/printer-setting/printer-setting';
import { SettingProvider } from '../providers/setting/setting';
import { PrinterSettingModalPage } from '../pages/printer-setting-modal/printer-setting-modal';
import { ShopHistorySettingComponent } from '../components/shop-history-setting/shop-history-setting';
import { InternationalSettingComponent } from '../components/international-setting/international-setting';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProductOrderPage,
    FooterComponent,
    GridComponent,
    RightSideOrderComponent,
    RightSideEditComponent,
    PreloadImageComponent,
    ItemGridComponent,
    ProductOrderComponent,
    MainMorePage,
    MoreLayoutPage,
    SettingsSideNavComponent,
    PaymentSettingComponent,
    OpenbillSettingComponent,
    PrinterSettingComponent,
    PopoverPage,
    PrinterSettingModalPage,
    ShopHistorySettingComponent,
    InternationalSettingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductOrderPage,
    MainMorePage,
    MoreLayoutPage,
    SettingsSideNavComponent,
    PaymentSettingComponent,
    OpenbillSettingComponent,
    PrinterSettingComponent,
    PopoverPage,
    PrinterSettingModalPage,
    ShopHistorySettingComponent,
    InternationalSettingComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MenuProvider,
    LoadingProvider,
    OrderProvider,
    SettingProvider
  ]
})
export class AppModule { }
