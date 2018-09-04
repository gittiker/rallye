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
    // var noofTimeOuts = setTimeout(function() {});
    // for (var i = 0 ; i < noofTimeOuts ; i++) clearTimeout(i);
    
    // setInterval(this.getMarkers, 25000);
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
                
          //console.log(this.g_id + " - " + this.lng + " - " + this.lat)

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
        // this.placeMarkers(geojson);
        let mmap = this.map;
        // add markers to map
        geojson.features.forEach(function(marker) {
          // create a DOM element for the marker
          var el = document.createElement('div');
          el.className = 'marker';
          el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
          el.style.width = '50px';
          el.style.height = '50px'      // add marker to map
          new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .addTo(mmap);
    })

    })
  }

  //
  // MAP
  //


  private initializeMap() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.buildMap();
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 14,
      center: [this.map_lat, this.map_lng]
    });
  }

  placeMarkers(geojson: any) {
    // var marker = new mapboxgl.Marker()
    //   .setLngLat([30.5, 50.5])
    //   .addTo(this.map);
    
    // add markers to map
    geojson.features.forEach(function(marker) {
      // create a DOM element for the marker
      var el = document.createElement('div');
      el.className = 'marker';
      // el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
      el.style.width = '50px';
      el.style.height = '50px'      // add marker to map
      new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(this.map);
    })
  }
}

  //   this.map.on('load', function (mmap: mapboxgl.Map) {

  //     mmap.addLayer({
  //         "id": "points",
  //         "type": "symbol",
  //         "source": {
  //             "type": "geojson",
  //             "data": this.geojson
  //         },
  //         "layout": {
  //             // "icon-image": "{icon}-15",
  //             // "text-field": "{title}",
  //             // "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
  //             // "text-offset": [0, 0.6],
  //             // "text-anchor": "top"
  //         }
  //     });
  // })
