import { Component } from '@angular/core';
import { NavController, MenuController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string;
  stories: [{title: string, author: string, img: string}];

  constructor(public navCtrl: NavController, public menu: MenuController, public popoverCtrl: PopoverController) {
    this.menu.enable(true);
    this.stories = [
      { title: 'Spoilt Brat', author: 'Olaide Soetan', img: 'assets/img/1.jpg'}
    ]
  }

  read() {
    this.title = "Spoilt Brat";
    this.navCtrl.push("ReadPage", { title: this.title });
  }

  options(e) {
    let popover = this.popoverCtrl.create('OptPage');
    popover.present({
      ev: e
    });
  }

}
