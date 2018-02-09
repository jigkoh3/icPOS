import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the GridComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'grid',
  templateUrl: 'grid.html'
})
export class GridComponent {

  @Input() items: any;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemPressed: EventEmitter<any> = new EventEmitter<any>();
  constructor() {

  }

  selected(item) {
    this.itemSelected.emit(item);
  }

  pressEvent(item) {
    this.itemPressed.emit(item);
  }


}
