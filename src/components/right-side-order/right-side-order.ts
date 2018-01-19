import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello RightSideOrderComponent Component');
    this.text = 'Hello World';
  }

}
