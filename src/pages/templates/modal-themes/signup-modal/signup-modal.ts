import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup-modal',
  templateUrl: 'signup-modal.html',
})
export class SignupModalPage {

  slides: Array<{id: number, photo: string}> = [
    { id: 1, photo: 'assets/imgs/slider-1.jpeg' },
    { id: 2, photo: 'assets/imgs/slider-2.jpeg' },
    { id: 3, photo: 'assets/imgs/slider-3.jpeg' },
    { id: 4, photo: 'assets/imgs/slider-4.jpeg' },    
  ];

  constructor(public viewCtrl: ViewController) {
  }

  signup() {
    this.dismiss();
  }

  login() {
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
