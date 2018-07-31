import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAC5kT6DWJ2io2vsw6ZRS9-7kLy5g2xJmQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
