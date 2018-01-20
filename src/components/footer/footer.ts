import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  @Input() items: any;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    
  }

  clickedMore = function(){
    alert("clickedMore");
  }

  clickedList = function(){
    alert("clickedList");
  }

  selected(item){
    this.itemSelected.emit(item);
  }

}
