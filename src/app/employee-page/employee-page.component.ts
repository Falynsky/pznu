import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.employeeService.getJSON().subscribe(data => {
      console.log(data);
    });
  }

}
