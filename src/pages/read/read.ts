import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Slides, ToastController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {
  @ViewChild(Slides) slides: Slides;
  title: string;
  stories: [{ story: string, img: string, no: string }];
  voiceNo: any;
  voicePrev: any;
  voice: boolean;
  music: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private nativeAudio: NativeAudio,
    private toastCtrl: ToastController
  ) {
    this.title = this.navParams.get('title');
    // console.log(this.title);
    this.voice = false;
    this.music = false;

    this.nativeAudio.preloadComplex('1', 'assets/voice/1.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('2', 'assets/voice/2.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('3', 'assets/voice/3.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('4', 'assets/voice/4.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('5', 'assets/voice/5.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('6', 'assets/voice/6.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('7', 'assets/voice/7.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('8', 'assets/voice/8.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('9', 'assets/voice/music.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('10', 'assets/voice/9.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('11', 'assets/voice/10.mp3', 1, 1, 0);
    this.nativeAudio.preloadComplex('music', 'assets/voice/music2.mp3', 0.4, 1, 0);

    this.stories = [
      {
        story: "Aduke was a barren woman who yearned at all costs to have a \
          child to call her own. After several futile attempts at conceiving, \
          she decided to seek the assistance of a herbalist, babalawo. Babalawo \
          informed her that there was a shortage of good children from the gods \
          and advised her to wait till the annual traditional festival when the \
          gods will send more children to the earth",
        img: "assets/img/1.jpg", 
        no: ""
      },
      {
        story: "Rather than listen to the advice of the Babalawo, she pleaded \
          with him to give her any of the available children from the gods.She felt \
          she was not getting any younger and she needed someone who could inherit \
          all the wealth she had worked hard to acquire.",
        img: "assets/img/2.jpg",
        no: ""
      },
      {
        story: "Babalawo reluctantly granted her request. He however warned her that \
          she mustalways make the child happy and must never allow the child to shed \
          tears or the consequences will be very dire. Nine months down the line, \
          Aduke gavebirth to a baby girl who she named ‘Omolabake’. Aduke made sure \
          Omolabake did not lack for anything.She was quick to grant all requests and \
          nevercorrected her when she did any wrong.",
        img: "assets/img/3.jpg",
        no: ""
      },
      {
        story: "Knowing she could never be scolded by her mother, Omolabake was always up \
        to one mischief or the other.She coveted other people’s properties and her mother went \
        to great lengths to acquire such properties for her. Aduke parted with ridiculous \
        amounts of money to acquire anything Omolabake wanted.",
        img: "assets/img/4.jpg",
        no: ""
      },
      {
        story: "The village elders called Aduke to warn her of the inherent danger \
          in making sure Omolabake had everything she asked for. Rather than listen, \
          she retorted rudely ‘I know what I went through before having this child, \
          and I’m not about to sacrifice her happiness’.",
        img: "assets/img/5.jpg",
        no: ""
      },
      {
        story: "One day, she took Omolabake to the market to plait her hair. \
          The hairdresser’s stall was opposite another stall where an old lady was \
          frying ‘akara’. Aduke bought several items to make sure Omolabake was \
          comfortable and didn’t cry while plaiting",
        img: "assets/img/6.jpg",
        no: ""
      },
      {
        story: "The akara seller had unusually large eyeballs and this fascinated \
          Omolabake who kept staring at her.After a while, she \
          pointed at the stall to indicate to her mother that she wanted \
          something.Aduke quickly dashed to the stall to buy some \
          akara for her.",
        img: "assets/img/7.jpg",
        no: ""
      },
      {
        story: "Omolabake rejected the akara and kept pointing at the stall. Aduke paid for all \
          the akara available in the stall and even bought every item on sale in \
          neighboring stalls to pacify Aduke.On learning that Omolabake wanted Iya \
          Alakara’s eyes, Aduke bought a female goat and plucked its eyes for her \
          daughter to play with. Seeing that her mother was yet to buy the object that \
          caught her interest, she started crying and singing thus:",
        img: "assets/img/8.jpg",
        no: ""
      },
      {
        story: "'“Iya ma ra o (twice) \
          Chorus: Ra fun mi \
          Ki se oju ewure \
          Chorus: Ra fun mi \
          Ki se oju aguntan \
          Chorus: Ra fun mi \
          Oju iya ti n be loja, ti n ta akara \
          Iya ma ra o \
          Chorus: Ra fun mi'",
        img: "assets/img/9.jpg",
        no: ""
      },
      {
        story: "Despite Aduke’s tempting offers of gifts, the Iya alakara refused to part with her \
          eyes in order to please Omolabake,. After a while, Omolabake started crying and \
          sinking into the ground until her whole body was buried in the ground and the \
          villagers, who were trying to prevent her from sinking, only have the tufts of hair \
          pulled from her head to show for their efforts. That was how Aduke lost the child that she in-patiently got from the gods. \
          Till this day, she only sits and stares at the hair that once belonged to her \
          daughter.",
        img: "assets/img/10.jpg",
        no: ""
      }
    ]
  }

  ionViewDidLeave() {
    this.nativeAudio.stop('music');      
    if (this.voice) {
      this.voice = false;
      this.nativeAudio.stop(this.voiceNo);
      this.nativeAudio.stop(this.voicePrev);
    }
    if (this.music) {
      this.music = false;
      this.nativeAudio.stop('music');      
    }
  }

  vocab() {
    let modal = this.modalCtrl.create("VocabPage");
    modal.present();
  }

  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
    this.voiceNo = this.slides.getActiveIndex();
    this.voicePrev = this.slides.getPreviousIndex();
    this.voiceNo = String(this.voiceNo);
    this.voicePrev = String(this.voicePrev);
    this.nativeAudio.stop(this.voiceNo);
    this.nativeAudio.stop(this.voicePrev);
    // console.log('Current index is', this.voicePrev);
    if (this.voice) {
      this.nativeAudio.play(this.voiceNo).then(onSuccess => {
        let toast = this.toastCtrl.create({
          message: "Story audio now playing",
          duration: 3000,
          position: "bottom"
        })
        toast.present();
      }, onError => {
        let toast = this.toastCtrl.create({
          message: "Sorry, currently unable to play story audio",
          duration: 3000,
          position: "bottom"
        })
        toast.present();
      });
    }

  }

  playVoice() {
    if (this.voice) {
      this.voice = false;
      this.nativeAudio.stop(this.voiceNo);
      this.nativeAudio.stop(this.voicePrev);
    } else {
      this.nativeAudio.play(this.voiceNo).then(onSuccess => {
        this.voice = true;
        let toast = this.toastCtrl.create({
          message: "Story audio now playing",
          duration: 3000,
          position: "bottom"
        })
        toast.present();
      }, onError => {
        this.voice = false;
        let toast = this.toastCtrl.create({
          message: "Sorry, currently unable to play story audio",
          duration: 3000,
          position: "bottom"
        })
        toast.present();
      } );
    }
  }

  playSong() {
    if (!this.music) {
      this.nativeAudio.loop('music').then(onSuccess => {
        this.music = true;
        let toast = this.toastCtrl.create({
          message: "Story Music audio now playing",
          duration: 3000,
          position: "bottom"
        })
        toast.present();
      }, onError => {
        this.music = false;
        let toast = this.toastCtrl.create({
          message: "Sorry, currently unable to play story music",
          duration: 3000,
          position: "bottom"
        })
        toast.present();
      });      
    } else {
      this.nativeAudio.stop('music').then(onSuccess => {
        this.music = false;
        let toast = this.toastCtrl.create({
          message: "Story Music audio has been stopped",
          duration: 3000,
          position: "bottom"
        })
        toast.present();
      }, onError => {
        this.music = true;
        let toast = this.toastCtrl.create({
          message: "Sorry, story music is unable to stop",
          duration: 3000,
          position: "bottom"
        })
        toast.present();
      });      
    }
  }

}
