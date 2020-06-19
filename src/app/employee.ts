import {Publication} from './publication';

export class Employee {
name: string;
place: string;
adress: string;
room: string;
tel: string;
email: string;
site: string;
publications: Publication[];


  // tslint:disable-next-line:max-line-length
  constructor(name: string, place: string, adress: string, room: string, tel: string, email: string, site: string, publications: Publication[]) {
    this.name = name;
    this.place = place;
    this.adress = adress;
    this.room = room;
    this.tel = tel;
    this.email = email;
    this.site = site;
    this.publications = publications;
  }
}
