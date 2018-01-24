import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentSettingModel } from '../../assets/models/setting.model';

@Injectable()
export class SettingProvider {

    constructor(public http: HttpClient) {

    }

    getPaymentSetting(): Promise<PaymentSettingModel> {
        return this.http.get('./assets/json/payment_setting.json')
            .toPromise()
            .then(response => response as PaymentSettingModel)
            .catch(this.handleError);
    }

    savePaymentSetting(data): Promise<any> {
        return this.http.post('./assets/json/payment_setting.json', data)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}
