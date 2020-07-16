import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'video-grid-component',
  templateUrl: './video-grid-component.component.html',
  styleUrls: ['./video-grid-component.component.css']
})
export class VideoGridComponentComponent implements OnInit {

  videoTile = [];
  constructor() { }

  ngOnInit(): void {
    this.videoTile = [
      {user: 'John Appleseed',text: 'One', cols: 2, rows: 2, color: 'lightblue', viewers: 3939},
      {user: 'Mira Akbar',text: 'Two', cols: 1, rows: 1, color: 'lightgreen', viewers: 420},
      {user: 'Sarah Toh',text: 'Three', cols: 1, rows: 1, color: 'lightpink', viewers: 1337},
      {user: 'Aji Nomoto',text: 'Four', cols: 1, rows: 1, color: '#DDBDF1', viewers: 765},
      {user: 'Homura Tabata',text: 'Five', cols: 1, rows: 1, color: '#DDBDF1', viewers: 243},
      {user: '',text: 'Share your video', cols: 1, rows: 1, color: '#FFFFFF'}
    ];
  }

}
