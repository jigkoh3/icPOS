import { Component, Input } from '@angular/core';

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

  @Input() item: any;

  constructor() {
    
  }

}
