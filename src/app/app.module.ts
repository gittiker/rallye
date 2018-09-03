import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { ChatComponent } from './chat/chat.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyB31tnVHuobHgbwb6uHVoky299RonHCEyo'
      // apiKey: 'AIzaSyDWLloWmmnM74Fvrlm7_EcoKzMrW4Fxhxo' //Maps V2
    })
  ],
  declarations: [ AppComponent, HelloComponent, MapComponent, ChatComponent, NewsfeedComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
