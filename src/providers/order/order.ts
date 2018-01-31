import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel, OrderItemModel, RoundModel } from '../../assets/models/order.model';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {
  public order: Array<OrderItemModel>;
  public round: RoundModel;
  constructor(public http: HttpClient) {
    this.order = [];
  }

  // getOrder():Promise<OrderModel>{
  //   return this.http.get('./assets/json/order.json')
  //   .toPromise()
  //   .then(response => response as OrderModel)
  //   .catch(this.handleError);
  // }

  openRound(startmoney:number):Promise<RoundModel>{
    let date=new Date();
    this.round = new RoundModel();
    this.round.name = date.getDate().toString()+"-"+(date.getMonth()).toString()+"-"+date.getFullYear().toString()+" "+date.getHours()+":"+date.getMinutes();
    this.round.startmoney = startmoney;
    return Promise.resolve(this.round);
  }

  private handleError(error: any): Promise<any> {
    // this.log.errorService('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
