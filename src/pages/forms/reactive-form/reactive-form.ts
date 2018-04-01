import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-reactive-form',
  templateUrl: 'reactive-form.html',
})
export class ReactiveFormPage {
  heroForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.heroForm.get('name'));
  }

}
