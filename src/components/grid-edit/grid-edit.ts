import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the GridEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'grid-edit',
  templateUrl: 'grid-edit.html'
})
export class GridEditComponent {

  @Input() items: any;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    
  }

  selected(item){
    //alert(item.name);
    this.itemSelected.emit(item);
  }

}
