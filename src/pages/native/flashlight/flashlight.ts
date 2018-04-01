import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@IonicPage()
@Component({
  selector: 'page-flashlight',
  templateUrl: 'flashlight.html',
})
export class FlashlightPage {

  isOpen: boolean = false;

  constructor(private flashlight: Flashlight) {
  }

  openFlashlight() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) { this.flashlight.switchOn(); } 
    else { this.flashlight.switchOff(); }
  }
}
