import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {People} from '../../providers/people/people'
import {DetailContactPage} from '../../pages/detail-contact/detail-contact';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  // public people = this.service.getPeople()
  public people = [];
  public peopleAll = []; 
  public page = 0;
  public genderType = "";
  public errorMessage : string;
  public reloadData = false;

  constructor(public navCtrl: NavController, public service:People,public actionSheetCtrl: ActionSheetController) {
    this.service.getPeopleFilterGender(this.genderType,this.page)
    .subscribe(
      (response) => {
        console.log(response);
        this.people = response["results"]
        this.peopleAll = this.people
      },
      (error) => console.log(error)
    )
  }
  
  doRefresh(e) {
    this.service.getPeopleFilterGender(this.genderType,this.page)
    .subscribe(
      (response) => {
        console.log(response);
        this.people = response["results"]
        this.peopleAll = this.people
        e.complete()
      },
      (error) => {
        console.log(error)
        e.complete()
      }
    )
  }

  doInfinite(e) {
    this.service.getPeopleFilterGender(this.genderType,this.page)
    .subscribe(
      (response) => {
        console.log(response);
        this.people.push(...response["results"])
        this.peopleAll = this.people
        e.complete()
        this.page = this.page + 1
      },
      (error) => {
        console.log(error)
        e.complete()
      }
    )
  }

  Upload(){
    
  }
  
  toggleReloadData() {
    this.reloadData = !this.reloadData
  }

  pushPerson(user){
    this.navCtrl.push(DetailContactPage,user)
  }

  searchPerson(e){
    console.log(e.target.value)
    let val = e.target.value;
    if(val && val.trim() != ''){
      this.people = this.peopleAll.filter((person) => {
        return person.name.first.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 ||
         person.name.last.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    })
    console.log(this.people)
    }else {
      this.people = this.peopleAll.filter((person) => {
        return person.name.first.toLowerCase().indexOf('') > -1 ||
         person.name.last.toLowerCase().indexOf('') > -1;
    })
    }
  }

  actionFilter(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Filter your contact',
      buttons: [
        {
          text: 'Male',
          role: 'male',
          handler: () => {
            this.genderType = "male"
            this.page = 0
            this.service.getPeopleFilterGender(this.genderType,this.page)
            .subscribe(
                (response) => {
                  console.log(response);
                  this.people = response["results"]
                  this.peopleAll = this.people
                  this.page = this.page + 1
                },
                (error) => console.log(error))
          }
        },{
          text: 'Female',
          role: 'female',
          handler: () => {
            this.genderType = "female"
            this.page = 0
            this.service.getPeopleFilterGender(this.genderType,this.page)
            .subscribe(
                (response) => {
                  console.log(response);
                  this.people = response["results"]
                  this.peopleAll = this.people
                  this.page = this.page + 1
                },
                (error) => console.log(error)
            )
          }
        },{
          text: 'No Filter',
          role: 'no filter',
          handler: () => {
            this.genderType = ""
            this.page = 0
            this.service.getPeopleFilterGender(this.genderType,this.page)
            .subscribe(
                (response) => {
                  console.log(response);
                  this.people = response["results"]
                  this.peopleAll = this.people
                },
                (error) => console.log(error)
            )
          }
        }
      ]
    });
    actionSheet.present();
  }
}
