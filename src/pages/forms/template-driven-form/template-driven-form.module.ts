import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateDrivenFormPage } from './template-driven-form';

@NgModule({
  declarations: [
    TemplateDrivenFormPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateDrivenFormPage),
  ],
})
export class TemplateDrivenFormPageModule {}
