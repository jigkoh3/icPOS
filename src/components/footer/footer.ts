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

  @Input() menuSelected: String;
  @Input() items: any;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    
  }

  clickedMore = function(){
    let item = {
      name: "more"
    }
    this.itemSelected.emit(item);
  }

  clickedList = function(){
    let item = {
      name: "list"
    }
    this.itemSelected.emit(item);
  }

  selected(item){
    //this.menuSelected = item.name;
    this.itemSelected.emit(item);
  }

}
