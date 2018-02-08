import { Component, Input } from '@angular/core';

@Component({
  selector: 'employee-detail',
  templateUrl: 'employee-detail.html'
})
export class EmployeeDetailComponent {
  @Input() employee: any = {};

  constructor() {

  }

}
