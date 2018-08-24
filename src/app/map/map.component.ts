import { Component, OnInit } from '@angular/core';
import { GeoJson, FeatureCollection } from '../map';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})

export class MapComponent implements OnInit {

    /// default settings
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/outdoors-v9';
    lat = 37.75;
    lng = -122.41;
    message = 'Hello World!';
  
    // data
    source: any;
    markers: any;

    constructor(private mapService: MapService) {
    }

    ngOnInit() {
      this.markers = this.mapService.getMarkers()
      this.initializeMap()
    }
  

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