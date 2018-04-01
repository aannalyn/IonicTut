import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) { }

  openBasicAlert() {
    let basicAlert = this.alertCtrl.create({
      title: 'Basic Alert',
      message: 'This is an ui component called a basic alert!',
      buttons: ['OK', 'Cancel'],
    });
    basicAlert.present();
  }

  openPromptAlert() {
    let promptAlert = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter your username',
      inputs: [
       {
         name: 'username',
         placeholder: 'Title'
       } 
      ],
      buttons: [
       {
         text: 'Cancel',
         handler: () => {
           console.log('cancel clicked');
         },
         role: 'selected'
       }, {
         text: 'OK',
         handler: (data) => {
           console.log(data);
           console.log('OK clicked');
         }
       } 
      ]
    });
    promptAlert.present();
  }

  openConfirmationAlert() {
    let confirmAlert = this.alertCtrl.create({
      title: 'Delete Items',
      message: 'Are you sure to delete the items?',
      buttons: [
        {
          text: 'NO',
          handler: () => {
            console.log('No button clicked!');
          }
        }, {
          text: 'YES',
          handler: () => {
            console.log('Yes button clicked!')
          }
        }
      ]
    });
    confirmAlert.present();
  }

  openRadioAlert() {
    let radioAlert = this.alertCtrl.create();
    radioAlert.setTitle('Select Gender');
    radioAlert.addInput(
      {
        type: 'radio',
        label: 'Female',
        value: 'female',
      }
    );
    radioAlert.addInput(
      {
        type: 'radio',
        label: 'Male',
        value: 'male',
      }
    );

    radioAlert.addButton({
      text: 'OK',
      handler: (value) => {
        console.log(value);
        console.log('OK Button clicked!');
      }
    });

    radioAlert.present();
  }

  openCheckboxAlert() {
    let checkboxAlert = this.alertCtrl.create();
    checkboxAlert.setTitle('Select Option');
    checkboxAlert.addInput({
      type: 'checkbox',
      label: 'Option 1',
      value: 'option1'
    });
    checkboxAlert.addInput({
      type: 'checkbox',
      label: 'Option 2',
      value: 'option2'
    });
    checkboxAlert.addInput({
      type: 'checkbox',
      label: 'Option 3',
      value: 'option3'
    });
    checkboxAlert.addButton({
      text: 'OK',
      handler: (value) => {
        console.log(value);
        console.log('Ok button clicked!');
      }
    });
    checkboxAlert.present();
  }

}
