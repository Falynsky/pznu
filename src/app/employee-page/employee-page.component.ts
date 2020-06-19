import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Employee} from '../employee';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
  styles: [`
    ::ng-deep .employeeTopics > .mat-expansion-indicator:after {
      color: #ff4081;
    }
  `]
})
export class EmployeePageComponent implements OnInit {

  employees: Employee[] = new Array<Employee>();
  columnsToDisplay = [ 'autor', 'tytul', 'rok'];
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getJSON().subscribe(response => {
      this.employees = response;
    });
  }
}
