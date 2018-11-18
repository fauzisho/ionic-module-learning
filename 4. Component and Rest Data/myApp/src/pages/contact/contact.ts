import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {People} from '../../providers/people/people'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public people = this.service.getPeople()
  public reloadData = false;
  constructor(public navCtrl: NavController, public service:People,) {}
  toggleReloadData() {
    this.reloadData = !this.reloadData
  }
}
