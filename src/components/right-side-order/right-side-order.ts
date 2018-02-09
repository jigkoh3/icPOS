import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderItemModel, OrderModel } from '../../assets/models/order.model';
import { PopoverController, ViewController } from 'ionic-angular';

import _ from 'lodash';
/**
 * Generated class for the RightSideOrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'right-side-order',
  templateUrl: 'right-side-order.html'
})
export class RightSideOrderComponent {
  total: number = 0;
  takeAway: any = false;
  @Input() order: OrderModel;
  @Output() selectedOrderItem: EventEmitter<any> = new EventEmitter<any>();
  // @Output() removedOrderItem: EventEmitter<any> = new EventEmitter<any>();
  // @Output() clearAllOrderItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() orderSaved: EventEmitter<any> = new EventEmitter<any>();
  @Output() orderPaid: EventEmitter<any> = new EventEmitter<any>();
  // @Output() takeAwayChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private popoverCtrl: PopoverController) {
    //console.log(this.items);
    //this.total = _.sumBy(this.items, function (o) { return o.total; })
  }

  ngDoCheck() {
    console.log(this.order);
    this.takeAway = this.order.servetype === "takeaway";
    if (this.order && this.order.items) {
      //console.log(this.items);
      this.order.total = _.sumBy(this.order.items, function (o) { return o.total * o.qty; })
      //console.log(this.total);
    }else{
      this.order.total = 0;
    }
  }

  selectingOrderItem(item) {
    this.selectedOrderItem.emit(item);
  }

  removeOrderItem(item) {
    let idx = this.order.items.indexOf(item);
    //console.log(idx);
    this.order.items.splice(idx, 1);
    if (this.order.items.length === 0) {
      this.order.items = [];
    }
    //this.removedOrderItem.emit(this.order.items);
  }

  clearall() {
    //console.log("object");
    this.order.items = [];
    //this.clearAllOrderItem.emit(this.order.items);
  }

  updateTakeAway(){
    // console.log(this.takeAway);
    //this.takeAwayChanged.emit(this.takeAway);
    this.order.servetype = this.takeAway ? "takeaway" : "takeatable";
    console.log(this.order.servetype);
  }

  orderSaving(){
    this.orderSaved.emit(this.order.items);
  }

  orderPaying(){
    this.orderPaid.emit(this.order.items);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.onDidDismiss(data => {
      //console.log(data);
      this.clearall();

    });
    popover.present({
      ev: myEvent
    });
  }

}

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close()">{{ "CLAREALL" | translate }}</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) { }

  close() {
    this.viewCtrl.dismiss();
  }
}
