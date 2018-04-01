import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {
  public barcodeData;

  constructor(
    public alertCtrl: AlertController,
    public barcodeScanner: BarcodeScanner
  ) { }

  scan() {
    const options = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      orientation: 'portrait',
      disableAnimations: true, 
      disableSuccessBeep: false 
    };

    this.barcodeScanner
      .scan(options)
      .then((data) => {

        this.barcodeData = data;

        const alert = this.alertCtrl.create({
          title: 'Scan Results',
          subTitle: data.text,
          buttons: ['OK']
        });

        alert.present();

      })
      .catch((err) => {

        const alert = this.alertCtrl.create({
          title: 'Attention!',
          subTitle: err,
          buttons: ['Close']
        });
        alert.present();

      });
  }


}
