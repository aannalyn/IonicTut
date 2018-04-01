import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public toastCtrl: ToastController) {
  }

  openToast() {
    let toast = this.toastCtrl.create({
      message: 'This is a toast!',
      duration: 1000,
    });
    toast.present();
  }

}
