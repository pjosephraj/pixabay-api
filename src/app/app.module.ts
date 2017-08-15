import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {
  MdInputModule,
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdProgressBarModule
} from '@angular/material';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { ImageService } from './shared/image.service';

// import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

import { ImageListComponent } from './image-list/image-list.component';
import { ImageCardComponent } from './image-list/image-card/image-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
    MdProgressBarModule,
    MasonryModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
