import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlideBasicPage } from './slide-basic';

@NgModule({
  declarations: [
    SlideBasicPage,
  ],
  imports: [
    IonicPageModule.forChild(SlideBasicPage),
  ],
})
export class SlideBasicPageModule {}
