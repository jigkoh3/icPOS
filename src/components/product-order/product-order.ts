import { Component } from '@angular/core';

/**
 * Generated class for the ProductOrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-order',
  templateUrl: 'product-order.html'
})
export class ProductOrderComponent {

  text: string;

  constructor() {
    console.log('Hello ProductOrderComponent Component');
    this.text = 'Hello World';
  }

}
