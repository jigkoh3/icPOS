import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello RightSideEditComponent Component');
    this.text = 'Hello World';
  }

}
