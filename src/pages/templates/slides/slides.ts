import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  pages: Array<{ title:string, component:string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.pages = [
      { title: 'Basic Slide', component: 'SlideBasicPage' },
      { title: 'Styled Slide', component: 'StyledSlidesPage' },      

    ];

  }

  openPage(page) {
    this.navCtrl.push(page);
  }
  
}