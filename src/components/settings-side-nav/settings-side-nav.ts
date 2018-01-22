import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'settings-side-nav',
  templateUrl: 'settings-side-nav.html'
})
export class SettingsSideNavComponent {
  @Output() settingType: EventEmitter<any> = new EventEmitter<any>();
  private itemSelected: string = 'payment';
  constructor() {

  }

  selectedItem(itemType, itemName) {
    this.itemSelected = itemType;
    this.settingType.emit({ 'type': itemType, 'name': itemName });
  }

}
