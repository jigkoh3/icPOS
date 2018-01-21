import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ItemGridComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-grid',
  templateUrl: 'item-grid.html'
})
export class ItemGridComponent {

  @Input() item: any;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    
  }
  
  selected(item){
    this.itemSelected.emit(item);
  }

}
