import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';
import { MenuProvider } from '../../providers/menu/menu';
import { HomeModel, MenuModel, ItemModel } from '../../assets/models/menus.model';
import { LoadingProvider } from '../../providers/loading/loading';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ProductOrderComponent } from '../../components/product-order/product-order';
import { ProductOrderPage } from '../product-order/product-order';
import { OrderProvider } from '../../providers/order/order';
import { OrderModel, OrderItemModel } from '../../assets/models/order.model';
import { ProductModel } from '../../assets/models/product.model';
import { MainMorePage } from '../main-more/main-more';

import _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  order: Array<OrderItemModel>;
  selecter: Array<OrderItemModel>;
  menuItemsSelected: Array<ItemModel>;
  menuSelected: String;
  refTabInHome: any = {};
  menus: Array<MenuModel>;
  homeData: HomeModel;
  isModeEdit: boolean = false;

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    private menusService: MenuProvider,
    private orderService: OrderProvider,
    private loading: LoadingProvider,
    private app: App,
    public navParams: NavParams
  ) {
    this.refTabInHome = this.navParams.data;
  }

  ionViewDidLoad() {
    //this.getOrderData();
    this.getMenuData();
  }

  getMenuData() {
    this.loading.onLoading();
    setTimeout(() => {
      this.menusService.getMenus().then(data => {
        // console.log(data);
        this.menus = data.menus;
        if (this.refTabInHome.refFooter) {
          this.menuSelected = this.refTabInHome.menuSelected;
          this.menuItemsSelected = this.refTabInHome.menuItemsSelected;
        } else {
          this.menuSelected = data.menus[0].name;
          this.menuItemsSelected = data.menus[0].items;
        }
        this.loading.dismiss();
      }, err => {
        // console.log(err);
        this.loading.dismiss();
      })
    }, 1000);

  }

  getOrderData() {
    //silent load order data
    this.orderService.getOrder().then(data => {
      this.order = data.items;
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  menuItemSelected(menu) {
    this.menuSelected = menu.name;
    if (menu.name === "more") {
      this.navCtrl.setRoot(MainMorePage, { menus: this.menus });
    } else if (menu.name === "list") {
      alert("List");
    } else {
      this.menuItemsSelected = menu.items;
    }
  }

  itemSelected(item) {
    //alert("Item Type Selected : " + item.type);
    switch (item.type) {
      case "none": {
        //statements; 
        break;
      }
      case "product": {
        //statements; 
        if (item.product.prices && item.product.submenus) {
          //console.log(item.product.prices);
          if (item.product.prices.length > 1 || item.product.submenus.length > 0) {
            this.presentProductModal(item.product);
          } else {
            let _item = new OrderItemModel();
            _item.product = item.product;
            _item.type = "product";
            _item.qty = 1;
            _item.total = item.product.prices[0].price;
            this.updateOrder(_item);
          }
        }

        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }

  itemPressed($event){
    this.isModeEdit = true;
  }

  removedOrderItem(order) {
    this.order = order;
  }

  clearAllOrderItem(order) {
    this.order = null;
  }

  itemAdded(menu){
    this.menus.push(menu);
  }

  savedMenu(){
    console.log("saved");
    this.menusService.addMenu(this.menus).then(data => {
      // console.log(data);
      this.menus = data.menus;
      if (this.refTabInHome.refFooter) {
        this.menuSelected = this.refTabInHome.menuSelected;
        this.menuItemsSelected = this.refTabInHome.menuItemsSelected;
      } else {
        this.menuSelected = data.menus[0].name;
        this.menuItemsSelected = data.menus[0].items;
      }
      this.isModeEdit = false;
      this.loading.dismiss();
    }, err => {
      // console.log(err);
      this.loading.dismiss();
    })
  }

  updateOrder(item) {
    if (this.order) {
      var filter: Array<any> = _.filter(
        _.omit(this.order, ['qty', 'total']),
        _.omit(item, ['qty', 'total']));


      if (filter && filter.length > 0) {
        filter.forEach(function(itm){
          itm.qty+= item.qty;
        });
        
        
      } else {
        this.order.push(item);
      }



    } else {
      this.order = [];
      this.order.push(item);
    }

  }

  presentProductModal(item) {
    let productModal = this.modalCtrl.create(ProductOrderPage, { item: item });
    productModal.onDidDismiss(data => {
      //console.log(data);
      if (data) {
        this.updateOrder(data);
      }

    });
    productModal.present();
  }

}
