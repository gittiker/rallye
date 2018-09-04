import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

import { icon, marker, latLng, tileLayer } from 'leaflet';
declare let L;

@Component({
  selector: 'map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})

export class MapBoxComponent implements OnInit{
  f_lng;f_lat;f_name
  map: any=[];
  geojsonMarkerOptions: any=[]
  // geojson = {"type": "FeatureCollection","features": []};
  // style = 'mapbox://styles/mapnoob/cjkk22gfz4zih2sqkhzjdwbxy'

  constructor(){
    firebase.initializeApp(environment.firebase)
  }

  ngOnInit() {
    this.map = L.map('map').setView([50.983421, 7.126967], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
    this.geojsonMarkerOptions = {
      radius: 8,
      fillColor: "#ff7800",
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };

    this.getMarkers();
  }

  getMarkers() {
    firebase.database().ref("/groups/").on("value", data=>{
      let dataa = data.exportVal();
      let userKeys = Object.keys(dataa)

      let geojson = {
        "type": "FeatureCollection",
        "features": []
      };

      userKeys.forEach(user => {
        //console.log(user)
        try {
          this.f_lng = dataa[user].adress.long;
          this.f_lat = dataa[user].adress.lat;
          
          this.f_name = String(dataa[user].name);
          // var id = temp.replace( /^\D+/g, '');

          var template =  {
            "type": "Feature",
              "properties": {
                "name": this.f_name,
                "marker-color": "#ff0000",
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                    this.f_lat,
                    this.f_lng
                ]
              }
            }
          geojson.features.push(template)
        }
        catch(e)  {console.log(e);}
      });
      console.log(geojson);

      L.geoJSON(geojson).addTo(this.map)
 
    })
  }
}
