import { Component, OnInit } from '@angular/core';
import {VideosServiceService} from "../videos-service.service";
import {any} from "codelyzer/util/function";



@Component({
  selector: 'video-grid-component',
  templateUrl: './video-grid-component.component.html',
  styleUrls: ['./video-grid-component.component.css']
})
export class VideoGridComponentComponent implements OnInit {

  videoTile = [];
  video = [];
  channelIds = ['UCWFKCr40YwOZQx8FHU_ZqqQ', 'UCRcgy6GzDeccI7dkbbBna3Q', 'UC5QtJAXO631Ry0WUQuMzfHg', 'UCoY57POHD3aHk6qTsA65gdQ', 'UCY7gYHez6sxlK9TRSANHTaw'];
  constructor(private videoService: VideosServiceService) { }

  ngOnInit(): void {
    this.videoTile = [
      {user: 'Samantha Abdul', text: 'How To Master The Disaster', cols: 2, rows: 2, color: 'lightblue', viewers: 0},
      {user: 'Grant', text: 'How to Build a Working R2D2', cols: 1, rows: 1, color: 'lightgreen', viewers: 0},
      {user: 'Ares', text: 'Grazed By Apocalypse', cols: 1, rows: 1, color: 'lightpink', viewers: 0},
      {user: 'Peter Swensens', text: 'Breaking Dawn', cols: 1, rows: 1, color: '#DDBDF1', viewers: 0},
      {user: 'Bart Rudolph', text: 'Firestorm', cols: 1, rows: 1, color: '#DDBDF1', viewers: 0},
      {user: '', text: 'Share Your Document', cols: 1, rows: 1, color: '#FFFFFF', viewers: 0}
    ];

    //sample API call
    //TODO: supposedly able to search for videos. but api key exceeded the daily quota.
    for (var index = 0; index < this.channelIds.length; index++) {
      this.videoService.getVideosForChanel(this.channelIds[index], 1).subscribe(list => {
        for (let element of list["items"]) {
          this.video.push(element);
        }
      })
    }

    console.log(this.video);

    //TODO: For some reason, unable to display video tiles........
    var length = this.video.length;

    for (var index = 0; index < length; index++) {
      var cols = 0;
      var rows = 0;

      if(index == 0) {
        cols = 2;
        rows = 2;
      } else {
        cols = 1;
        rows = 2;
      }
      let videoJson = this.video[index];
      let json = {
        user: videoJson.snippet.channelTitle,
        text: videoJson.snippet.title,
        cols: cols,
        rows: rows,
        viewers: 0,
        videoId: videoJson.id.videoId,
        color: 'lightblue'
      };
      console.log(json);
      this.videoTile.push(json);
    }

    console.log(this.videoTile);
  }

}
