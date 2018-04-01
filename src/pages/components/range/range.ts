import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {
  from:number;
  to:number;
  fontsize:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.from = 0;
    this.to = 20;
  }

}
