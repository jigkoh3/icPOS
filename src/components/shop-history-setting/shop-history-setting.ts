import { Component } from '@angular/core';

@Component({
  selector: 'shop-history-setting',
  templateUrl: 'shop-history-setting.html'
})
export class ShopHistorySettingComponent {
  private shop: any = {};
  constructor() {
    this.shop.shopType = 'ร้านทั่วไป';
    this.shop.foodType = 'อาหารไทย';
  }

  saveData() {
    console.log(this.shop);
  }

}
