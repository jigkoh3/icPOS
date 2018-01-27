import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuModel, ItemModel } from '../../assets/models/menus.model';

/**
 * Generated class for the FooterEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-edit',
  templateUrl: 'footer-edit.html'
})
export class FooterEditComponent {

  @Input() menuSelected: String;
  @Input() items: Array<MenuModel>;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  selected(item) {
    //this.menuSelected = item.name;
    this.itemSelected.emit(item);
  }

  addItem() {

    let item = new ItemModel();
    let menu = new MenuModel();
    let lstIdx = this.items.length + 1
    menu.name = "เมนู " + lstIdx;
    menu.icon = "menu";
    menu.items = [];
    for (let i = 0; i < 32; i++) {
      item.type = "none";
      menu.items.push(item);
    }
    this.itemAdded.emit(menu);
  }

}
