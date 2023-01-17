import { Component } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private actionSheetController: ActionSheetController) {}

  async presentActionSheet() {

    const actionSheet = await this.actionSheetController.create({
      header: 'header del actionSheet',
      subHeader: 'sottotitolo del soprastante',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            action: 'delete'
          }
        },
        {
          text: 'Share',
          data: {
            action: 'share'
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel'
          }
        }
      ]
    })

    const prova = actionSheet.present();
   
    console.log(await actionSheet.onDidDismiss());
  }
}
