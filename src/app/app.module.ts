import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

import { Globals } from './globals';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { MapBoxComponent } from './map-box/map-box.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyB31tnVHuobHgbwb6uHVoky299RonHCEyo'
    }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [ AppComponent, HelloComponent, MapComponent, MapBoxComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ Globals ]
})
export class AppModule { }