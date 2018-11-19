import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {People} from '../../providers/people/people'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  // public people = this.service.getPeople()
  public people = [];
  public errorMessage : string;

  public reloadData = false;
  constructor(public navCtrl: NavController, public service:People,) {
    this.service.getPeopleFromApi()
    .subscribe(
      (response) => {
        console.log(response);
        this.people = response["results"]
      },
      (error) => console.log(error)
    )
  }
  toggleReloadData() {
    this.reloadData = !this.reloadData
  }
}
