import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.menu.enable(false)
  }

  login() {
    this.navCtrl.setRoot(HomePage)
  }

  reg() {
    this.navCtrl.push("RegPage")    
  }

}
