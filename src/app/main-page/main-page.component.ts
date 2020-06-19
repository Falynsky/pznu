import {Component, OnInit} from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  tiles: Tile[] = [
    {cols: 1, rows: 2},
    {cols: 1, rows: 1},
    {cols: 1, rows: 1}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
