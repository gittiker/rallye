// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.css']
// })
// export class MapComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }
//   title = 'tutt-dashboard';
//   lat = 51.678418;
//   lng = 7.809007;
//   locationChosen = false;

//   onChoseLocation(event){
//     this.lat = event.coords.lat;
//     this.lng = event.coords.lng;
//     this.locationChosen = true;
//   }
// }


import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
})
export class MapComponent  {
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
      
    },
    // Platzhalterwerte
	  // {
		  // lat: 50.584025,
		  // lng: 7.619600,
		//   label: 'A',
		//   draggable: true
	  // },
	  // {
		  // lat: 50.684025,
		  // lng: 7.319600,
		//   label: 'B',
		//   draggable: true
	  // }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
}
