import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-vocab',
  templateUrl: 'vocab.html',
})
export class VocabPage {
  vocabs: [{ word: string, meaning: string }]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.vocabs = [
      { word: "Consequences", meaning: "result of an action"},
      { word: "Dire", meaning: "serious, unbeabearable"},
      { word: "Babalawo", meaning: "Herbalist, or a native doctor"},
      { word: "Scolded", meaning: "corrected by being shouted at"},
      { word: "Mischief", meaning: "evil did, bad doings"},
      { word: "Coveted", meaning: "taking other peoples properties by a tricky means"},
      { word: "Acquire", meaning: "to get, obtain"},
      { word: "Properties", meaning: "something that belongs to a person"},
      { word: "Ridiculous", meaning: "un -imaginable"},
      { word: "Retorted", meaning: "to reply, or to respond"},
      { word: "Rudely", meaning: "harsh, no respect"},
      { word: "Hairdresser’s", meaning: "a person who makes hair for girls"},
      { word: "Akara", meaning: "bean cake"},
      { word: "Fascinated", meaning: "a form of excitement, thrilled"},
      { word: "In-Patiently", meaning: "not having patience"},
    ]
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad VocabPage');
  // }

  close() {
    this.viewCtrl.dismiss();
  }

}
