import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StyledSlidesPage } from './styled-slides';

@NgModule({
  declarations: [
    StyledSlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(StyledSlidesPage),
  ],
})
export class StyledSlidesPageModule {}
