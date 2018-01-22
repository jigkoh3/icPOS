import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderItemModel } from '../../assets/models/order.model';

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

  constructor() {
    //console.log(this.items);
  }

  removeOrderItem(item){
    let idx = this.items.indexOf(item);
    //console.log(idx);
    this.items.splice(idx);
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

}
