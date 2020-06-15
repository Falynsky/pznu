import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

export interface Employee {
  name: string;
  place: string;
  adress: string;
  room: string;
  tel: string;
  publications: Publication[];
}
export interface Publication {
  id: number;
  Autor: string;
  Tytul: string;
  Rok: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.httpService.get('./assets/pracownicy.json');
  }
}
