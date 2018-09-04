import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { MapBoxComponent } from './map-box/map-box.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    LeafletModule.forRoot(),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyB31tnVHuobHgbwb6uHVoky299RonHCEyo'
    }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [ AppComponent, MapBoxComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ ]
})
export class AppModule { }