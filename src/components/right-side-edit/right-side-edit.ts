import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the RightSideEditComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'right-side-edit',
  templateUrl: 'right-side-edit.html'
})
export class RightSideEditComponent {

  @Output() savedMenu: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
   
  }

  saveClick(){
    this.savedMenu.emit();
  }

}
