import { Component } from '@angular/core';
import { NavController, App, NavParams, Events } from 'ionic-angular';
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
import { ListOfBillPage } from '../list-of-bill/list-of-bill';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isModeEdit: boolean = false;
  //Grid & Grid Edit @Input
  menuItemsSelected: Array<ItemModel>;
  //Footer & Footer Edit @Input
  menuSelected: String;
  menus: Array<MenuModel>;

  //Left Order
  order: OrderModel;
  private shopno: string;

  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    private menusService: MenuProvider,
    private orderService: OrderProvider,
    private loading: LoadingProvider,
    private app: App,
    public navParams: NavParams
  ) {

    this.order = this.orderService.order;
    //console.log(this.order);
    if (!menusService.homeData) {
      this.getMenuData();
    } else {
      this.menus = menusService.homeData.menus;
      this.menuSelected = menusService.homeData.menus[0].name;
      this.menuItemsSelected = menusService.homeData.menus[0].items;
    }
  }

  ionViewDidLoad() {

  }
  /** 
   * Read Data from page
  */
  getMenuData() {
    this.loading.onLoading();
    setTimeout(() => {
      this.menusService.getMenus('owner').then(data => {
        this.menus = data.menus;
        this.menuSelected = data.menus[0].name;
        this.menuItemsSelected = data.menus[0].items;
        this.loading.dismiss();
      }, err => {
        this.loading.dismiss();
      })
    }, 1000);

  }

  /**
   * Footer Event Emiter
   * @param menu is @Output emit from Footer
   */
  menuItemSelected(menu) {
    this.menuSelected = menu.name;
    if (menu.name === "more") {
      this.navCtrl.setRoot(MainMorePage, { menus: this.menus });
    } else if (menu.name === "list") {
      this.navCtrl.setRoot(ListOfBillPage, { menus: this.menus });
    } else {
      this.menuItemsSelected = menu.items;
    }
  }

  /**
 * Press on menu for edit
 */
  itemPressed() {
    this.isModeEdit = true;
  }
  /**
   * Add Menu Item
   * @param menu is menu item for add to menutable
   */
  itemAdded(menu) {
    this.menus.push(menu);
  }
  /**
   * Add Menu Item
   * @param menu is menu item for add to menutable
   */
  itemEditSelected(index) {
    let item = this.menuItemsSelected[index];
    // console.log(item.type);
    switch (item._type) {
      case "none": {
        //statements; 
        this.presentAddMenuItemModal(index);
        break;
      }
      case "product": {
        //statements; 
        this.presentEditMenuItemModal(index);
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }
  /**
   * Deleting menu item (Edit mode only)
   * @param index is position index of deleting menu item
   */
  itemDeleted(index) {
    let item = new ItemModel();
    item._type = "none";
    this.menuItemsSelected[index] = item;
  }
/**
 * Save
 * @param e is table menu items example ของหวาน
 */
  savedMenu(e) {
    this.menus.push(e);
    this.menusService.addMenu(this.menus).then(data => {
      console.log(data);
      this.menus = data.menus;
      this.menuSelected = data.menus[0].name;
      this.menuItemsSelected = data.menus[0].items;
      this.isModeEdit = false;
      this.loading.dismiss();
    }, err => {
      this.loading.dismiss();
      console.log(err);
    });
  }

  /**
   * Left Grid Event of selecting menu item to order
   * @param item is @Output from Left Grid Menu from menu item
   */
  itemSelected(item) {
    switch (item._type) {
      case "none": {
        break;
      }
      case "product": {
        // 1. check รอบการขาย
        if (this.orderService.round) {
          if (item.product.prices && item.product.submenus) {
            if (item.product.prices.length > 1 || item.product.submenus.length > 0) {
              this.presentProductModal(item.product, null);
            } else {
              let _item = new OrderItemModel();
              _item.product = item.product;
              _item._type = "product";
              _item.qty = 1;
              _item.total = item.product.prices[0].price;
              this.updateOrder(_item);
            }
          }
        } else {
          // alert("เปิดรอบการขาย");
          let opts: any = {
            enableBackdropDismiss: false
          }
          let openRoundModal = this.modalCtrl.create(OpenRoundPage, null, opts);
          openRoundModal.onDidDismiss(data => {
            if (data) {
              this.orderService.openRound(data).then(rnd => {
                if (item.product.prices && item.product.submenus) {
                  // console.log(item.product.prices);
                  if (item.product.prices.length > 1 || item.product.submenus.length > 0) {
                    this.presentProductModal(item.product, null);
                  } else {
                    let _item = new OrderItemModel();
                    _item.product = item.product;
                    _item._type = "product";
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

/**
 * Editing Order Item
 * @param item is editing order item
 */
  selectedOrderItem(item) {
    console.log(item);
    this.presentProductModal(item.product, item);
  }

/**
 * Update Order Items
 * @param item is order item add to order
 */
  updateOrder(item) {
    //console.log(item);
    if (this.order.items) {
      var filter: Array<any> = _.filter(
        _.omit(this.order.items, ['qty', 'total']),
        _.omit(item, ['qty', 'total']));


      if (filter && filter.length > 0) {
        filter.forEach(function (itm) {
          itm.qty += item.qty;
        });


      } else {
        console.log("first order items");
        this.order.items.push(item);
      }

    } else {
      // this.order = [];
      this.order.items.push(item);
    }
    console.log(this.order);
  }
/**
 * Save Bill
 * @param order
 */
  orderSaved(order) {
    // console.log(orders);
    // if (this.takeAway) {
    //   this.presentTakeAwayModal(orders);
    // } else {
    //   //alert("เลือกโต๊ะ")
    //   this.presentToTableModal(orders);
    // }
  }
/**
 * Paid Bill
 * @param order
 */
  orderPaid(orders) {
    // console.log(orders);
    this.presentToPaidModal(orders);
  }


  /**
   * Modal of Adding Order Item (Add,Edit)
   * @param item 
   * @param result 
   */
  presentProductModal(item, result) {
    let opts: any = {
      enableBackdropDismiss: false
    }
    let productModal = this.modalCtrl.create(ProductOrderPage, { item: item, result: result }, opts);
    productModal.onDidDismiss(data => {
      //console.log(data);
      if (data) {
        this.updateOrder(data);
      }

    });
    productModal.present();
  }

  /**
   * Modal of Save To Table
   * @param orders 
   */
  presentToTableModal(orders) {
    let toTableModal = this.modalCtrl.create(ToTablePage, { orders: orders });
    toTableModal.onDidDismiss(data => {
      //console.log(data);
      if (data) {
        //this.updateOrder(data);
        // let bill: OrderModel = new OrderModel();
        // bill.servetype = "takeatable";
        // bill.table = data;
        // bill.items = this.order.i;
        // this.order = [];
        // this.menusService.createBill(bill).then(data => {
        //   this.navCtrl.setRoot(ListOfBillPage, { menus: this.menus });
        // }).catch(err => {

        // });
      }

    });
    toTableModal.present();
  }

  /**
   * Modal of Save To Away
   * @param orders 
   */
  presentTakeAwayModal(orders) {
    let takeAwayModal = this.modalCtrl.create(TakeAwayPage, { orders: orders });
    takeAwayModal.onDidDismiss(data => {
      //console.log(data);
      if (data) {
        //this.updateOrder(data);
        // let bill: OrderModel = new OrderModel();
        // bill.servetype = "takeaway";
        // bill.customer = data;
        // bill.items = this.order;
        // this.order = [];
        // this.menusService.createBill(bill).then(data => {
        //   this.navCtrl.setRoot(ListOfBillPage, { menus: this.menus });
        // }).catch(err => {

        // });
      }

    });
    takeAwayModal.present();
  }

  /**
   * Modal of Paying Bill
   * @param orders 
   */
  presentToPaidModal(orders) {
    let opts: any = {
      enableBackdropDismiss: false
    }
    let toPaidModal = this.modalCtrl.create(PaymentPage, { orders: orders }, opts);
    toPaidModal.onDidDismiss(data => {
      //console.log(data);
      if (data) {
        //this.updateOrder(data);
        // let bill: OrderModel = new OrderModel();
        // bill.servetype = "takeatable";
        // bill.table = data;
        // bill.items = this.order;
        // this.order = [];
        // this.menusService.createBill(bill).then(data=>{
        //   this.navCtrl.setRoot(ListOfBillPage, { menus: this.menus });
        // }).catch(err=>{

        // });
      }

    });
    toPaidModal.present();
  }

  
/**
 * Modal of Add menu item
 * @param index 
 */
  presentAddMenuItemModal(index) {
    let opts: any = {
      enableBackdropDismiss: false
    }
    let addItemModal = this.modalCtrl.create(AddItemMenuPage, null, opts);
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
/**
 * Modal of Edit menu item
 * @param index 
 */
  presentEditMenuItemModal(index) {
    let opts: any = {
      enableBackdropDismiss: false
    }
    let addItemModal = this.modalCtrl.create(AddItemMenuPage, { item: this.menuItemsSelected[index] }, opts);
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
