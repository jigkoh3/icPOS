import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoreLayoutPage } from '../more-layout/more-layout';


@IonicPage()
@Component({
  selector: 'page-main-more',
  templateUrl: 'main-more.html',
})
export class MainMorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  selectedMenu(type, name) {
    this.navCtrl.push(MoreLayoutPage, { type: type, name: name });
  }

}
