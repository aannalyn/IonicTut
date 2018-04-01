import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
  ) {
  }

  openModal() {
    let modal = this.modalCtrl.create('ModalContentPage');
    modal.present();
  }


}
