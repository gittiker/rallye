import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { WebcamComponent } from './webcam/webcam.component';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { MapBoxComponent } from './map-box/map-box.component';

import { NewsfeedComponent } from './newsfeed/newsfeed.component';
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    LeafletModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [ AppComponent, WebcamComponent, MapBoxComponent, NewsfeedComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }