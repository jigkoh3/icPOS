import { Component } from '@angular/core';
import { SettingProvider } from '../../providers/setting/setting';

@Component({
  selector: 'shop-history-setting',
  templateUrl: 'shop-history-setting.html'
})
export class ShopHistorySettingComponent {
  private shop: any = {};
  constructor(private settingProvider: SettingProvider) {
    this.shop.shopType = 'normal';
    this.shop.foodType = 'thai';
    this.init();
  }

  init() {
    this.settingProvider.getShopHistorySetting().then(data => {
      this.shop = data;
    }).catch(err => {
      console.log(err);
    });
  }

  saveData() {
    console.log(this.shop);
  }

}
