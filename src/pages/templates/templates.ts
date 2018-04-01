import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-templates',
  templateUrl: 'templates.html',
})
export class TemplatesPage {
  pages:Array<{title:string, component:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.pages = [
      { title: 'Modals', component: 'ModalThemesPage'},      
      { title: 'Slides', component: 'SlidesPage'},
    ];

  }

  openPage(page) {
    this.navCtrl.push(page);
  }

}
