import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public loadingCtrl: LoadingController) {
    this.loading();
  }

  loading() {
    let loader = this.loadingCtrl.create({
      content: 'Loading...',
      duration: 1000
    });
    loader.present();
  }


}
