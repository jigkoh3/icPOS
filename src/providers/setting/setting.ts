import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentSettingModel } from '../../assets/models/payment_setting.model';
import { OpenbillSettingModel } from '../../assets/models/openbill_setting.model';
import { ShopHistoryModel } from '../../assets/models/shop_history_setting.model';
import { Constants } from '../../app/app.contants';
import { AuthProvider } from '../auth/auth';
import { SettingsModel } from '../../assets/models/settings.model';

@Injectable()
export class SettingProvider {
    private hearder: any;

    constructor(public http: HttpClient,private auth: AuthProvider) {
        this.hearder = Constants.Header;
    }

    getSettings(): Promise<SettingsModel> {
        return this.http.get('./assets/json/settings.json')
            .toPromise()
            .then(response => response as SettingsModel)
            .catch(this.handleError);
    }

    getEmployees(): Promise<any> {
        return this.http.get(Constants.API_URL + '/api/users', { headers: this.hearder })
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    createEmployee(data): Promise<any> {
        return this.http.post(Constants.API_URL + '/api/users', data, { headers: this.hearder })
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
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

    getOpenbillSetting(): Promise<OpenbillSettingModel> {
        return this.http.get('./assets/json/openbill_setting.json')
            .toPromise()
            .then(response => response as OpenbillSettingModel)
            .catch(this.handleError);
    }

    saveOpenbillSetting(data): Promise<any> {
        return this.http.post('./assets/json/openbill_setting.json', data)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    getShopHistorySetting(): Promise<ShopHistoryModel> {
        return this.http.get('./assets/json/shop_history_setting.json')
            .toPromise()
            .then(response => response as ShopHistoryModel)
            .catch(this.handleError);
    }

    saveShopHistorySetting(data): Promise<ShopHistoryModel> {
        return this.http.post('./assets/json/shop_history_setting.json', data)
            .toPromise()
            .then(response => response as ShopHistoryModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}
