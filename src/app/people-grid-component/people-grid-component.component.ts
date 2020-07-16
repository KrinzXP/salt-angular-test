import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'people-grid-component',
  templateUrl: './people-grid-component.component.html',
  styleUrls: ['./people-grid-component.component.css']
})
export class PeopleGridComponentComponent implements OnInit {

  peopleTile = [];
  constructor() { }

  ngOnInit(): void {
    this.peopleTile = [
      {text: 'Jonathan Maxwell', cols: 2, rows: 2, color: 'lightblue'},
      {text: 'Harpreet Kaur', cols: 1, rows: 1, color: 'lightgreen'},
      {text: 'Duncan Strong', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Nelson Hunt', cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Martha Winarta', cols: 1, rows: 1, color: '#DDBDF1'},
      {text: 'Share Your Work', cols: 1, rows: 1, color: '#FFFFFF'}
    ];
  }

}
