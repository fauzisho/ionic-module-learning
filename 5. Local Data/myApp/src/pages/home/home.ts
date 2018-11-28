import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nameValue = ""
  passValue = ""
  constructor(public navCtrl: NavController,public alertCtrl : AlertController) {

  }
  onClickLogin(){
    let alert = this.alertCtrl.create({
    title : this.nameValue,
    subTitle : this.passValue,
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
    ],
    buttons: [   {
      text: 'Save',
      handler: data => {
        console.log('Saved clicked' + data.title);
      }
    }]
    });
    alert.present();
  }

}
