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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FooterComponent,
    GridComponent,
    RightSideOrderComponent,
    RightSideEditComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
