import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { HomeModel, MenuModel } from '../../assets/models/menus.model';
import { LoadingProvider } from '../../providers/loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menu: Array<MenuModel>;
  homeData: HomeModel;

  constructor(public navCtrl: NavController,
    private menus: MenuProvider,
    private loading: LoadingProvider
  ) {
    
  }

  ionViewDidLoad() {
    this.getData();
  }

  getData(){
    this.loading.onLoading();
    setTimeout(() => {
      this.menus.getMenus().then(data =>{
        this.menu = data.menus;
        console.log(data);
        this.loading.dismiss();
      },err=>{
        this.loading.dismiss();
      })
    }, 1000);
  }

  

}
