import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss'],
  styles: [`
    ::ng-deep .researchTopics > .mat-expansion-indicator:after {
      color: #ff4081;
    }
  `]
})

export class SubjectPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
