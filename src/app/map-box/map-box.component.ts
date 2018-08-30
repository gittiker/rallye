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
    this.getMarkers();
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
      //console.log(geojson)
    })
  }
}