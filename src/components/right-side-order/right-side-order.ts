import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderItemModel } from '../../assets/models/order.model';
import { PopoverController, ViewController } from 'ionic-angular';

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

  @Input() items: Array<OrderItemModel>;
  @Output() removedOrderItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() clearAllOrderItem: EventEmitter<any> = new EventEmitter<any>();

  constructor(private popoverCtrl: PopoverController) {
    //console.log(this.items);
  }

  removeOrderItem(item){
    let idx = this.items.indexOf(item);
    //console.log(idx);
    this.items.splice(idx,1);
    if(this.items.length === 0){
      this.items = null;
    }
    this.removedOrderItem.emit(this.items);
  }

  clearall(){
    //console.log("object");
    this.items = null;
    this.clearAllOrderItem.emit(this.items);
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
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}
