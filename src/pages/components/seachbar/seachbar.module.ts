import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeachbarPage } from './seachbar';

@NgModule({
  declarations: [
    SeachbarPage,
  ],
  imports: [
    IonicPageModule.forChild(SeachbarPage),
  ],
})
export class SeachbarPageModule {}
