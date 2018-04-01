import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-themes',
  templateUrl: 'modal-themes.html',
})
export class ModalThemesPage {

  pages:Array<{title:string, component:string}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    
    this.pages = [
      { title: 'Signup Modal', component: 'SignupModalPage'},     
    ];

  }

  openModal(page) {
    this.modalCtrl.create(page, null, { cssClass: 'custom-modal'}).present();
  }


}
