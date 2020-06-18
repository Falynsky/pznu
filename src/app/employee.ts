import {Publication} from './publication';

export class Employee {
name: string;
place: string;
adress: string;
room: string;
tel: string;
publications: Publication[];


  constructor(name: string, place: string, adress: string, room: string, tel: string, publications: Publication[]) {
    this.name = name;
    this.place = place;
    this.adress = adress;
    this.room = room;
    this.tel = tel;
    this.publications = publications;
  }
}
