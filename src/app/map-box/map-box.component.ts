import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
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
  private map: mapboxgl.Map;
  
  style = 'mapbox://styles/mapnoob/cjkk22gfz4zih2sqkhzjdwbxy'
  map_lat = 6.9777083; //7.126967;
  map_lng = 51.053245999999994; //50.989371;
  
  constructor(){
    firebase.initializeApp(environment.firebase)
  }

  async ngOnInit() {
    await this.getMarkers();
    this.initializeMap();
  }

  getMarkers() {
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
          var long = dataa[user].adress.long;
          var lati = dataa[user].adress.lat;
                
          // Extract Group-Number from String
          var temp = String(dataa[user].name);
          var id = temp.replace( /^\D+/g, '');

          var template =  {
            "type": "Feature",
              "properties": {
                "marker-color": "#ff0000",
                "marker-symbol": id,
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                    lati,
                    long
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
  private initializeMap() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.buildMap();

    var ggeojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.032, 38.913]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.414, 37.776]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }]
    };
    var mmap = this.map;
    // add markers to map
    ggeojson.features.forEach(function(marker) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(mmap);
    });
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      center: [-96, 37.8],
      zoom: 3,
      style: 'mapbox://styles/mapbox/light-v9'
      // style: this.style,
      // zoom: 14,
      // center: [this.map_lat, this.map_lng]
    });
  }

  placeMarkers(geojson: any) {
  }
}
