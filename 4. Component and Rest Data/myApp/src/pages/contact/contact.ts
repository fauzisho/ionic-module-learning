import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {People} from '../../providers/people/people'
import {DetailContactPage} from '../../pages/detail-contact/detail-contact';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  // public people = this.service.getPeople()
  public people = [];
  public errorMessage : string;
  public reloadData = false;
  constructor(public navCtrl: NavController, public service:People) {
    this.service.getPeopleFromApi()
    .subscribe(
      (response) => {
        console.log(response);
        this.people = response["results"]
      },
      (error) => console.log(error)
    )
  }
  doRefresh(e) {
    this.service.getPeopleFromApi()
    .subscribe(
      (response) => {
        console.log(response);
        this.people = response["results"]
        e.complete()
      },
      (error) => {
        console.log(error)
        e.complete()
      }
    )
  }

  doInfinite(e) {
    this.service.getPeopleFromApi()
    .subscribe(
      (response) => {
        console.log(response);
        this.people.push(...response["results"])
        e.complete()
      },
      (error) => {
        console.log(error)
        e.complete()
      }
    )
  }
  
  toggleReloadData() {
    this.reloadData = !this.reloadData
  }

  pushPerson(user){
    this.navCtrl.push(DetailContactPage,user)
  }

}
