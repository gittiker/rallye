import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
// import {mapboxgl} from 'mapbox-gl';
@Component({
  selector: 'map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})

export class MapBoxComponent implements OnInit{
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
    // var noofTimeOuts = setTimeout(function() {});
    // for (var i = 0 ; i < noofTimeOuts ; i++) clearTimeout(i);
    
    // setInterval(this.getMarkers, 25000);
  }

  ngOnInit() {
    this.getMarkers();
    this.initializeMap();
  }

  getMarkers() {
    firebase.initializeApp(environment.firebase)
    firebase.database().ref("/groups/").on("value", data=>{
      let dataa = data.exportVal();
      let userKeys = Object.keys(dataa)
      // console.log(userKeys)
      let geojson = {
        "type": "FeatureCollection",
        "features": []
      };

      userKeys.forEach(user => {
        //console.log(user)
        try {
          this.lng = dataa[user].adress.long;
          this.lat = dataa[user].adress.lat;
                
          // Extract Group-Number from String
          var temp = String(dataa[user].name);
          this.g_id = temp.replace( /^\D+/g, '');
                
          //console.log(this.g_id + " - " + this.lng + " - " + this.lat)

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
        catch(e)  {
          console.log(e);
        }
        });
      console.log(geojson)
    })
  }

  //
  // MAP
  //
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapnoob/cjkk22gfz4zih2sqkhzjdwbxy'
  map_lat = 7.126967;
  map_lng = 50.989371;

  private initializeMap() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.map_lat, this.map_lng]
    });
  }






}

