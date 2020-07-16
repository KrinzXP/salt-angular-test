import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  activityList = [];


  constructor() { }

  ngOnInit(): void {
    this.activityList = [
      {user: "Thonk", action: "commented on your post", actionContent: "It's Hammer Time!!", interval: "2 minutes ago", profileImg: "lul.jpg"},
      {user: "Rizu", action: "added a video", actionContent: "Squirrel go brrrrrrrrrrrr", interval: "2 minutes ago", profileImg: "brrr.jpg"},
      {user: "Grant", action: "added a document", actionContent: "[DIY] How to create R2D2", interval: "8 minutes ago", profileImg: "monochrome.jpg"},
      {user: "Rizu", action: "added a video", actionContent: "Squirrel go brrrrrrrrrrrr", interval: "2 minutes ago", profileImg: "brrr.jpg"},
      {user: "Rizu", action: "added a video", actionContent: "Squirrel go brrrrrrrrrrrr", interval: "2 minutes ago", profileImg: "brrr.jpg"},
      {user: "Rizu", action: "added a video", actionContent: "Squirrel go brrrrrrrrrrrr", interval: "2 minutes ago", profileImg: "brrr.jpg"},
      {user: "Rizu", action: "added a video", actionContent: "Squirrel go brrrrrrrrrrrr", interval: "2 minutes ago", profileImg: "brrr.jpg"},
    ]
  }

}
