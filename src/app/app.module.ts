import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular Material
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import { ToolbarComponentComponent } from './toolbar-component/toolbar-component.component';
import {MatInputModule} from "@angular/material/input";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatGridList, MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from "@angular/material/divider";

import { VideoGridComponentComponent } from './video-grid-component/video-grid-component.component';
import { PeopleGridComponentComponent } from './people-grid-component/people-grid-component.component';
import { DocumentsGridComponentComponent } from './documents-grid-component/documents-grid-component.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ChannelTilesComponent } from './channel-tiles/channel-tiles.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponentComponent,
    VideoGridComponentComponent,
    PeopleGridComponentComponent,
    DocumentsGridComponentComponent,
    ActivityListComponent,
    ChannelTilesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,

    //Angular Material UI
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,

  ],
  exports:[
    ToolbarComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
