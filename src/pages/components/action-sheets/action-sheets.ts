import { Component } from '@angular/core';
import { IonicPage, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-action-sheets',
  templateUrl: 'action-sheets.html',
})
export class ActionSheetsPage {

  constructor(public actionSheetCtrl: ActionSheetController) {
  }

  showActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Action Sheet',
      cssClass: 'action-sheet-basic',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked!');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked!');
          }
        },
        {
          text: 'Play',
          icon: 'arrow-dropup-circle',
          handler: () => {
            console.log('Play clicked!');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked!');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked!');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
