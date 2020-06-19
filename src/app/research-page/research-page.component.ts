import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.scss'],
  styles: [`
    ::ng-deep .researchTopics > .mat-expansion-indicator:after {
      color: #ff4081;
    }
  `]
})
export class ResearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
