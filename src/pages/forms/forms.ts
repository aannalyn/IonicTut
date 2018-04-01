import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
})
export class FormsPage {
  pages:Array<{
    title:string,
    component:string;
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pages = [
      { title: 'Template Driven Form', component: 'TemplateDrivenFormPage' },
      { title: 'Reactive Form', component: 'ReactiveFormPage' },      
    ];

  }

  openPage(page) {
    this.navCtrl.push(page);
  }

}
