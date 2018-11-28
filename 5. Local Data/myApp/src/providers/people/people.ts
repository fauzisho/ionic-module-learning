import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class People {
  private apiUrl = "https://randomuser.me/api/?results=20";
  private apigender = ""

  constructor(public http: HttpClient) {
    console.log('Hello PeopleProvider Provider');
  }

  getPeopleFromApi(){
      return this.http.get(this.apiUrl)
  }

  getPeopleFilterGender(genderType : String,page : number){
    this.apigender = "https://randomuser.me/api/?page=" + page +"&gender="+genderType+"&results=20"
    console.log(this.apigender)
    return this.http.get(this.apigender)
  }

}
