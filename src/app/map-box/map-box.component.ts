import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

import { icon, marker, latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})

export class MapBoxComponent implements OnInit{
  f_lng;f_lat;f_name
  markers: any=[]
  
  // style = 'mapbox://styles/mapnoob/cjkk22gfz4zih2sqkhzjdwbxy'

    // Define our base layers so we can reference them multiple times
    streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
    // // Marker for the top of FHDW
    summit = marker([50.983421, 7.1179945999999 ], {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
       })
    });

  options = {
    layers: [this.streetMaps,this.summit],
    zoom: 15,
    center: latLng([50.989371, 7.126967 ])
  };

  constructor(){
    firebase.initializeApp(environment.firebase)
    this.getMarkers()
  }

  ngOnInit() {
  }

  getMarkers() {
    firebase.database().ref("/groups/").on("value", data=>{
      let dataa = data.exportVal();
      let userKeys = Object.keys(dataa)

      userKeys.forEach(user => {
        //console.log(user)
        try {
          this.f_lng = dataa[user].adress.long;
          this.f_lat = dataa[user].adress.lat;
          
          this.f_name = String(dataa[user].name);
          // var id = temp.replace( /^\D+/g, '');

          var template = [this.f_name, this.f_lng,this.f_lat ]
          this.markers.push(template)
        }
        catch(e)  {console.log(e);}
      });
      console.log(this.markers)

      let map = document.getElementById("map")
      for (var i = 0; i < this.markers.length; i++) {
        var  summit =  marker([50.834211, 7.1179945999999 ], {
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'leaflet/marker-icon.png',
            shadowUrl: 'leaflet/marker-shadow.png'
           })
        });
        this.options.layers.push(summit)
      }
      console.log( this.options.layers)
    })
  }
}
