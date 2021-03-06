import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { environment } from '../../environments/environment';

import { Icon, icon, Marker, marker } from 'leaflet';
declare let L;

@Component({
  selector: 'map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})

export class MapBoxComponent implements OnInit{
  private defaultIcon: Icon = icon({
    iconUrl: 'assets/leaflet/images/marker-icon.png',
    shadowUrl: 'assets/leaflet/images/marker-shadow.png',
  });

  private FHDWIcon: Icon = icon({
    iconUrl: 'assets/FHDW_Logo.svg.png',
    shadowUrl: 'assets/leaflet/images/marker-shadow.png',

    iconSize:     [80, 40], // size of the icon
  })
  
  firstMarker = true;
  layerobj;
  f_lng;f_lat;f_name
  map: any=[];
  // style = 'mapbox://styles/mapnoob/cjkk22gfz4zih2sqkhzjdwbxy'

  constructor(){
    firebase.initializeApp(environment.firebase)
  }

  ngOnInit() {
    Marker.prototype.options.icon = this.defaultIcon;
    this.map = L.map('map').setView([50.983421, 7.126967], 15);

    this.layerobj = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    setInterval(() => this.getMarkers(), 5000); // ##refresh
    this.getMarkers();
  }

  getMarkers() {

    console.log("refresh map");
    if (!this.firstMarker) {this.removeMarker()};
    firebase.database().ref("/groups/").once("value", data=>{
      let dataa = data.exportVal();
      let userKeys = Object.keys(dataa)

      let geojson = [];

      userKeys.forEach(user => {
        //console.log(user)
        try {
          this.f_lng = dataa[user].adress.long;
          this.f_lat = dataa[user].adress.lat;
          
          this.f_name = String(dataa[user].name);

          var template =  {
            "type": "Feature",
              "properties": {
                "popupContent": this.f_name
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                    this.f_lng,
                    this.f_lat
                ]
              }
            }
          geojson.push(template)
        }
        catch(e)  
        {}// {console.log(e);}
      });
      // console.log(geojson);

      this.layerobj = L.geoJSON(geojson, {
        onEachFeature: function (feature, layer) {
          layer.bindPopup('<h1>'+feature.properties.popupContent+'</h1>');
        }
      }).addTo(this.map);
      L.marker([50.983, 7.119], {icon: this.FHDWIcon}).addTo(this.map);
      this.firstMarker=false;
    })
  }

  removeMarker() {
    this.map.removeLayer(this.layerobj);
  }
}