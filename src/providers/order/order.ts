import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel, OrderItemModel, RoundModel } from '../../assets/models/order.model';
import { HomeModel } from '../../assets/models/menus.model';
import { AuthProvider } from '../auth/auth';
import { HandleError } from '../handleError';
import { Constants } from '../../app/app.contants';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {
  public order: OrderModel;
  public round: RoundModel;

  constructor(public http: HttpClient,
    private auth: AuthProvider,
    private handleErr: HandleError
  ) {
    this.order = new OrderModel();
    this.order.servetype = "takeatable";
    this.order.items = [];

  }

  openRound(startmoney: number): Promise<RoundModel> {
    let date = new Date();
    this.round = new RoundModel();
    this.round.name = date.getDate().toString() + "-" + (date.getMonth()).toString() + "-" + date.getFullYear().toString() + " " + date.getHours() + ":" + date.getMinutes();
    this.round.startmoney = startmoney;
    return Promise.resolve(this.round);
  }

  createBill(order: OrderModel): Promise<OrderModel> {
    if (this.auth.authenticated()) {
      let hearder = Constants.Header;
      
     if(!order._id){
      order.docno = Date.now().toString();
      order.branch = Constants.branchSelected._id;
      return this.http.post(Constants.API_URL + '/api/bills', order, { headers: hearder })
        .toPromise()
        .then(response => response as any)
        .catch(err => this.handleError(err));
     }else{
      return this.http.put(Constants.API_URL + '/api/bills/' + order._id, order, { headers: hearder })
        .toPromise()
        .then(response => response as any)
        .catch(err => this.handleError(err));
     }
      
    } else {
      this.handleErr.notifyError("User is not Authorize");
      return Promise.reject("User is not Authorize");
    };
  }

  private handleError(error: any): Promise<any> {
    this.handleErr.notifyError(error.error);
    return Promise.reject(error.message || error);
  }

}
