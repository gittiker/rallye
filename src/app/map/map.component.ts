import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Globals } from '../globals'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})

export class MapComponent  {
  constructor(private globals: Globals) { 
    console.log(this.globals.db_data)
  }

  // google maps zoom level
  zoom: number = 15;
  
  // initial center position for the map
  lat: number = 50.984025;
  lng: number = 7.119600;

  setMarkers(){
    
    // Insert logic loop here
  }

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

interface group {
  g_name: string;
  g_lat: number;
  g_lng: number;
  label?: string;
}