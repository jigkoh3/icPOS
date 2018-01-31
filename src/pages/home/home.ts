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
import { AddItemMenuPage } from '../add-item-menu/add-item-menu';
import { ToTablePage } from '../to-table/to-table';
import { TakeAwayPage } from '../take-away/take-away';
import { OpenRoundPage } from '../open-round/open-round';

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
  isModeEdit: boolean = false;
  takeAway: boolean = true;

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    private menusService: MenuProvider,
    private orderService: OrderProvider,
    private loading: LoadingProvider,
    private app: App,
    public navParams: NavParams
  ) {

    this.refTabInHome = this.navParams.data;
    this.order = this.orderService.order;
    if (!menusService.homeData) {
      this.getMenuData();
    } else {
      this.menus = menusService.homeData.menus;
      if (this.refTabInHome.refFooter) {
        this.menuSelected = this.refTabInHome.menuSelected;
        this.menuItemsSelected = this.refTabInHome.menuItemsSelected;
      } else {
        this.menuSelected = menusService.homeData.menus[0].name;
        this.menuItemsSelected = menusService.homeData.menus[0].items;
      }
    }
  }


  ionViewDidLoad() {

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
    //console.log(item);
    switch (item.type) {
      case "none": {
        //statements; 
        break;
      }
      case "product": {
        //statements; 
        // console.log(item.product);

        //check round
        if (this.orderService.round) {
          if (item.product.prices && item.product.submenus) {
            // console.log(item.product.prices);
            if (item.product.prices.length > 1 || item.product.submenus.length > 0) {
              this.presentProductModal(item.product, null);
            } else {
              let _item = new OrderItemModel();
              _item.product = item.product;
              _item.type = "product";
              _item.qty = 1;
              _item.total = item.product.prices[0].price;
              this.updateOrder(_item);
            }
          }
        } else {
          // alert("เปิดรอบการขาย");
          let openRoundModal = this.modalCtrl.create(OpenRoundPage);
          openRoundModal.onDidDismiss(data => {
            //console.log(data);
            if (data || true) {
              //this.updateOrder(data);
              this.orderService.openRound(2000).then(rnd => {
                if (item.product.prices && item.product.submenus) {
                  // console.log(item.product.prices);
                  if (item.product.prices.length > 1 || item.product.submenus.length > 0) {
                    this.presentProductModal(item.product, null);
                  } else {
                    let _item = new OrderItemModel();
                    _item.product = item.product;
                    _item.type = "product";
                    _item.qty = 1;
                    _item.total = item.product.prices[0].price;
                    this.updateOrder(_item);
                  }
                }
              })
            }



          });
          openRoundModal.present();
        }



        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }

  itemPressed($event) {
    this.isModeEdit = true;
  }

  itemDeleted(index) {
    let item = new ItemModel();
    item.type = "none";
    this.menuItemsSelected[index] = item;
  }

  removedOrderItem(order) {
    this.order = order;
  }

  clearAllOrderItem(order) {
    this.order = [];
    this.orderService.order = [];
  }

  itemAdded(menu) {
    this.menus.push(menu);
  }

  itemEditSelected(index) {
    let item = this.menuItemsSelected[index];
    // console.log(item.type);
    switch (item.type) {
      case "none": {
        //statements; 
        this.presentAddMenuItemModal(index);
        break;
      }
      case "product": {
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }

  selectedOrderItem(item) {
    console.log(item);
    this.presentProductModal(item.product, item);
  }

  savedMenu() {
    // console.log("saved");
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
        filter.forEach(function (itm) {
          itm.qty += item.qty;
        });


      } else {
        this.order.push(item);
      }



    } else {
      this.order = [];
      this.order.push(item);
    }

  }

  takeAwayChanged(takeAway) {
    this.takeAway = takeAway;
  }

  orderSaved(orders) {
    console.log(orders);
    if (this.takeAway) {
      this.presentTakeAwayModal(orders);
    } else {
      //alert("เลือกโต๊ะ")
      this.presentToTableModal(orders);
    }
  }

  orderPaid(orders) {
    console.log(orders);
  }

  presentToTableModal(orders) {
    let toTableModal = this.modalCtrl.create(ToTablePage, { orders: orders });
    toTableModal.onDidDismiss(data => {
      //console.log(data);
      if (data) {
        //this.updateOrder(data);
      }

    });
    toTableModal.present();
  }
  presentTakeAwayModal(orders) {
    let takeAwayModal = this.modalCtrl.create(TakeAwayPage, { orders: orders });
    takeAwayModal.onDidDismiss(data => {
      //console.log(data);
      if (data) {
        //this.updateOrder(data);
      }

    });
    takeAwayModal.present();
  }

  presentProductModal(item, result) {
    let productModal = this.modalCtrl.create(ProductOrderPage, { item: item, result: result });
    productModal.onDidDismiss(data => {
      //console.log(data);
      if (data) {
        this.updateOrder(data);
      }

    });
    productModal.present();
  }

  presentAddMenuItemModal(index) {
    let addItemModal = this.modalCtrl.create(AddItemMenuPage);
    addItemModal.onDidDismiss(data => {
      //console.log(data);
      if (data) {
        //this.updateOrder(data);
        console.log(index);
        this.menuItemsSelected[index] = data;
        console.log(this.menuItemsSelected[index]);
      }

    });
    addItemModal.present();
  }

}
