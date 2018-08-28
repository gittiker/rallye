import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';
import { WebcamComponent } from './webcam/webcam.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAC5kT6DWJ2io2vsw6ZRS9-7kLy5g2xJmQ'
    })
  ],
  declarations: [ AppComponent, HelloComponent, WebcamComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
