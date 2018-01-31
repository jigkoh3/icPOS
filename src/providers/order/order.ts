import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel, OrderItemModel } from '../../assets/models/order.model';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {
  public order: Array<OrderItemModel>;
  constructor(public http: HttpClient) {
    this.order = [];
  }

  getOrder():Promise<OrderModel>{
    return this.http.get('./assets/json/order.json')
    .toPromise()
    .then(response => response as OrderModel)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // this.log.errorService('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
