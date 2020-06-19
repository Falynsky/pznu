import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../employee';
import {Publication} from '../publication';


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

  employees: Employee[] = new Array<Employee>();
  currentPublications = new Array<Publication>();
  columnsToDisplay = [ 'autor', 'tytul', 'rok'];
  constructor(private employeeService: EmployeeService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.employeeService.getJSON().subscribe(response => {
      // Array.from(response).forEach(value => {
      //   this.employees.push(new Employee(
      //     value.name, value.place, value.adress,
      //     value.room, value.tel, value.publications
      //   ));
      // }
      this.employees = response;

      // @ts-ignore
      // response.forEach(value => this.employees.push(
      //   new Employee(
      //           value.name,
      //           value.place,
      //           value.adress,
      //           value.room,
      //           value.tel,
      //           value.publications
      //         )
      // ));




      //
      // });
      // response.map(
      //   item => {
      //     return new Employee(
      //       item.name,
      //       item.place,
      //       item.adress,
      //       item.room,
      //       item.tel,
      //       item.
      //     );
      //   }
      // );
    });
    // });
  }

  onClick(name: string) {
    this.employees.filter(value => value.name === name).map(value => this.currentPublications = value.publications);
  }
}
export class TableBasicExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
