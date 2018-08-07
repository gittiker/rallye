import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

import * as firebase from "firebase"
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})

export class MapComponent  {
  constructor(){

    firebase.initializeApp(firebaseConfig)
  
    firebase.database().ref("/").once("value", data=>{
      let dataa = data.exportVal()
      console.log(dataa.groups)
      console.log(data.exportVal())
    })
  }

  // google maps zoom level
  zoom: number = 15;
  
  // initial center position for the map
  lat: number = 50.984025;
  lng: number = 7.119600;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 50.984025,
		  lng: 7.119600,
		  label: 'FH',
      draggable: false
      
    }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
}

export const firebaseConfig = {
  apiKey: "AIzaSyBQ_zgFYn4O8pTmvcNPJRCJkK8Vq9bOwo8",
  authDomain: "bgltour-b529d.firebaseapp.com",
  databaseURL: "https://bgltour-b529d.firebaseio.com",
  projectId: "bgltour-b529d",
  storageBucket: "bgltour-b529d.appspot.com",
  messagingSenderId: "744135181738"
};