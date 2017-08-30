import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-opt',
  templateUrl: 'opt.html',
})
export class OptPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  profile() {
    this.navCtrl.push('ProfilePage');
  }

  logout() {
    this.navCtrl.setRoot('WelcomePage');
  }

}
