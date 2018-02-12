import { AddBranchModalPage } from './../pages/add-branch-modal/add-branch-modal';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SortablejsModule } from "angular-sortablejs";

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
import { GridEditComponent } from '../components/grid-edit/grid-edit';
import { FooterEditComponent } from '../components/footer-edit/footer-edit';
import { AddItemMenuPage } from '../pages/add-item-menu/add-item-menu';
import { ProductPage } from '../pages/product/product';
import { OtherSettingComponent } from '../components/other-setting/other-setting';
import { AreaManageModalPage } from '../pages/area-manage-modal/area-manage-modal';
import { SetTableModalPage } from '../pages/set-table-modal/set-table-modal';
import { ToTablePage } from '../pages/to-table/to-table';
import { TakeAwayPage } from '../pages/take-away/take-away';
import { OpenRoundPage } from '../pages/open-round/open-round';
import { GroupByPipe } from '../pipes/group-by/group-by';
import { ListOfBillPage, PopoverBranchPage } from '../pages/list-of-bill/list-of-bill';
import { PaymentPage } from '../pages/payment/payment';
import { EditMenuModalPage } from '../pages/edit-menu-modal/edit-menu-modal';
import { DiscountModalPage } from '../pages/discount-modal/discount-modal';
import { PreLoginPage } from '../pages/pre-login/pre-login';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AuthProvider } from '../providers/auth/auth';
import { EmployeeSideNavComponent } from '../components/employee-side-nav/employee-side-nav';
import { CreateEmployeeModalPage } from '../pages/create-employee-modal/create-employee-modal';
import { EmployeeDetailComponent } from '../components/employee-detail/employee-detail';
import { HandleError } from '../providers/handleError';
import { SettingsModalPage } from '../pages/settings-modal/settings-modal';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    PopoverBranchPage,
    PrinterSettingModalPage,
    ShopHistorySettingComponent,
    InternationalSettingComponent,
    GridEditComponent,
    FooterEditComponent,
    AddItemMenuPage,
    ProductPage,
    OtherSettingComponent,
    AreaManageModalPage,
    SetTableModalPage,
    ToTablePage,
    TakeAwayPage,
    OpenRoundPage,
    GroupByPipe,
    ListOfBillPage,
    PaymentPage,
    EditMenuModalPage,
    DiscountModalPage,
    PreLoginPage,
    LoginPage,
    RegisterPage,
    EmployeeSideNavComponent,
    CreateEmployeeModalPage,
    EmployeeDetailComponent,
    AddBranchModalPage,
    SettingsModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    SortablejsModule,
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
    PopoverBranchPage,
    PrinterSettingModalPage,
    ShopHistorySettingComponent,
    InternationalSettingComponent,
    GridEditComponent,
    FooterEditComponent,
    AddItemMenuPage,
    ProductPage,
    OtherSettingComponent,
    AreaManageModalPage,
    SetTableModalPage,
    ToTablePage,
    TakeAwayPage,
    OpenRoundPage,
    ListOfBillPage,
    PaymentPage,
    EditMenuModalPage,
    DiscountModalPage,
    PreLoginPage,
    LoginPage,
    RegisterPage,
    EmployeeSideNavComponent,
    CreateEmployeeModalPage,
    EmployeeDetailComponent,
    AddBranchModalPage,
    SettingsModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    HandleError,
    MenuProvider,
    LoadingProvider,
    OrderProvider,
    SettingProvider
  ]
})
export class AppModule { }
