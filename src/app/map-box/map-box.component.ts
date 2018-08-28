import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { environment } from '../../environments/environment';
// import {mapboxgl} from 'mapbox-gl';
@Component({
  selector: 'map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})

export class MapBoxComponent {
  db_data: any=[];
  userKeys: any=[];
  geojson = {"type": "FeatureCollection","features": []};

  lng: any=0;
  lat: any=0;
  g_id: any;

  any = {
      "type": "Feature",
      "properties": {
          "marker-color": "#ff0000",
          "marker-symbol": this.g_id,
      },
      "geometry": {
          "type": "Point",
          "coordinates": [
              this.lat,
              this.lng
          ]
      }
    }

  constructor(){

    firebase.initializeApp(environment.firebase)
    firebase.database().ref("/groups/").on("value", data=>{
      this.db_data = data.exportVal()
      this.userKeys = Object.keys(this.db_data)
      console.log(this.userKeys)
      let geojson = {
        "type": "FeatureCollection",
        "features": []
      };

      for(let user of this.userKeys) {
        
        this.lng = this.db_data[user].adress.long;
        this.lat = this.db_data[user].adress.lat;
              
        // Extract Group-Number from String
        var temp = String(this.db_data[user].name);
        this.g_id = temp.replace( /^\D+/g, '');
              
        console.log(this.g_id + " - " + this.lng + " - " + this.lat)

        var template =  {
          "type": "Feature",
            "properties": {
              "marker-color": "#ff0000",
              "marker-symbol": this.g_id,
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                  this.lat,
                  this.lng
              ]
            }
          }
          
          geojson.features.push(template)
      }
      console.log(geojson)
    })
  }

  updateMarkers() {
    firebase.database().ref("/groups/").on("value", data=>{
      this.userKeys = Object.keys(this.db_data)
      console.log(this.userKeys)
      let geojson = {
        "type": "FeatureCollection",
        "features": []
      };

      for(let user of this.userKeys) {
        
        this.lng = this.db_data[user].adress.long;
        this.lat = this.db_data[user].adress.lat;
              
        // Extract Group-Number from String
        var temp = String(this.db_data[user].name);
        this.g_id = temp.replace( /^\D+/g, '');
              
        console.log(this.g_id + " - " + this.lng + " - " + this.lat)

        var template =  {
          "type": "Feature",
            "properties": {
              "marker-color": "#ff0000",
              "marker-symbol": this.g_id,
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                  this.lat,
                  this.lng
              ]
            }
          }
          
          geojson.features.push(template)
      }
      console.log(geojson)
    })
  }
}