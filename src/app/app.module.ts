import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FooterComponent } from '../components/footer/footer';
import { GridComponent } from '../components/grid/grid';
import { RightSideOrderComponent } from '../components/right-side-order/right-side-order';
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
    ProductOrderComponent
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
    ProductOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MenuProvider,
    LoadingProvider
  ]
})
export class AppModule { }
