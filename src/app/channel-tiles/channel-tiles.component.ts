import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'channel-tiles',
  templateUrl: './channel-tiles.component.html',
  styleUrls: ['./channel-tiles.component.css']
})
export class ChannelTilesComponent implements OnInit {
  channelTile: any;

  constructor() { }

  ngOnInit(): void {
    this.channelTile = [
      {text: "Google", cols: 1, rows: 1},
      {text: "Microsoft", cols: 1, rows: 1},
      {text: "Weather Channel", cols: 1, rows: 1},
      {text: "Dribbble", cols: 1, rows: 1},
      {text: "Reddit", cols: 1, rows: 1},
      {text: "Yahoo", cols: 1, rows: 1},
    ]
  }

}
