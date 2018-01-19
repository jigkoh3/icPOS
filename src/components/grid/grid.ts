import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello GridComponent Component');
    this.text = 'Hello World';
  }

}
