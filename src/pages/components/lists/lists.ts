import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {
  items:Array<{label:string, icon:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      { label: 'Item 1', icon: 'heart' },
      { label: 'Item 2', icon: 'home' },
      { label: 'Item 3', icon: 'add' },
      { label: 'Item 4', icon: 'alarm' },
      { label: 'Item 5', icon: 'albums' },
    ];
  }


}
