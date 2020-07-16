import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'documents-grid-component',
  templateUrl: './documents-grid-component.component.html',
  styleUrls: ['./documents-grid-component.component.css']
})
export class DocumentsGridComponentComponent implements OnInit {

  documentTile = [];
  constructor() { }

  ngOnInit(): void {
    this.documentTile = [
      {user: 'Samantha Abdul', text: 'How To Master The Disaster', cols: 2, rows: 2, color: 'lightblue', viewers: 0},
      {user: 'Grant', text: 'How to Build a Working R2D2', cols: 1, rows: 1, color: 'lightgreen', viewers: 0},
      {user: 'Ares', text: 'Grazed By Apocalypse', cols: 1, rows: 1, color: 'lightpink', viewers: 0},
      {user: 'Peter Swensens', text: 'Breaking Dawn', cols: 1, rows: 1, color: '#DDBDF1', viewers: 0},
      {user: 'Bart Rudolph', text: 'Firestorm', cols: 1, rows: 1, color: '#DDBDF1', viewers: 0},
      {user: '', text: 'Share Your Document', cols: 1, rows: 1, color: '#FFFFFF', viewers: 0}
    ];
  }

}
