import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-template-driven-form',
  templateUrl: 'template-driven-form.html',
})
export class TemplateDrivenFormPage {

  user:{username:string, password:string} = {
    username: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  onSubmit() {

  }

}
