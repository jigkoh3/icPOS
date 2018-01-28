import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs/dist';
import { ItemModel } from '../../assets/models/menus.model';

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
  options: SortablejsOptions = {
  };
  isModeEdit:boolean=true;
  @Input() items: Array<ItemModel>;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemDeleted: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.options = {
      chosenClass: 'xxx',
      ghostClass: 'xxx2',
      onEnd: (event: any) => {
        console.log(this.items);
      },
      animation: 150,
      delay: 15,
      filter: ".js-edit"
    };
  }

  selected(index){
    //alert(item.name);
    this.itemSelected.emit(index);
  }

  itemDelete(index){
    this.itemDeleted.emit(index);
  }

}
