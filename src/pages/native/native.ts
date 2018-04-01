import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-native',
  templateUrl: 'native.html',
})
export class NativePage {
  pages: Array<{ title:string, component:string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Barcode Scanner', component: 'BarcodeScannerPage' },
      { title: 'Flashlight', component: 'FlashlightPage' },
    
    ];
  }

}
