import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalThemesPage } from './modal-themes';

@NgModule({
  declarations: [
    ModalThemesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalThemesPage),
  ],
})
export class ModalThemesPageModule {}
