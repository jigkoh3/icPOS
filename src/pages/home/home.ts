import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { HomeModel, MenuModel, ItemModel } from '../../assets/models/menus.model';
import { LoadingProvider } from '../../providers/loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuItemsSelected: Array<ItemModel>;
  menuSelected: String;
  menus: Array<MenuModel>;
  homeData: HomeModel;

  constructor(public navCtrl: NavController,
    private menusService: MenuProvider,
    private loading: LoadingProvider
  ) {
    
  }

  ionViewDidLoad() {
    this.getData();
  }

  getData(){
    this.loading.onLoading();
    setTimeout(() => {
      this.menusService.getMenus().then(data =>{
        this.menus = data.menus;
        this.menuSelected = data.menus[0].name;
        this.menuItemsSelected = data.menus[0].items;
        console.log(data);
        this.loading.dismiss();
      },err=>{
        this.loading.dismiss();
      })
    }, 1000);
  }

  menuItemSelected(menu){
    //console.log(menu);
    this.menuSelected = menu.name;
    if(menu.name === "more"){
      alert("More");
    }
    if(menu.name === "list"){
      alert("List");
    }
    if(menu.items){
      this.menuItemsSelected = menu.items;
    }
    
  }

}
