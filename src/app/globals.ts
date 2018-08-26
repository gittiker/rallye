import { Injectable } from '@angular/core';
import * as firebase from "firebase"
import { longStackSupport } from 'q';

@Injectable()
export class Globals {
    db_data: any=[]
    featureCollection: any=[]

    lng: any=0;
    lat: any=0;
    g_id: any;

    any = {
        "type": "Feature",
        "properties": {
            // "name": "",
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

        firebase.initializeApp(firebaseConfig)
        firebase.database().ref("/groups/").on("value", data=>{
            this.db_data = data.exportVal()
            let userKeys = Object.keys(this.db_data)
            for(let user of userKeys) {
                
                this.lng = this.db_data[user].adress.long;
                this.lat = this.db_data[user].adress.lat;
                
                // Extract Group-Number from String
                var temp = String(this.db_data[user].name);
                this.g_id = temp.replace( /^\D+/g, '');
                
                console.log(this.g_id + " - " + this.lng + " - " + this.lat)


            // console.log(this.db_data[user].adress.long)
            }

        })
    }

    // OnInit() {
    //     firebase.database().ref("/").once("value", data=>{
    //         this.db_data = data.exportVal()
    //     })
    // }  
}

export const firebaseConfig = {
    apiKey: "AIzaSyBQ_zgFYn4O8pTmvcNPJRCJkK8Vq9bOwo8",
    authDomain: "bgltour-b529d.firebaseapp.com",
    databaseURL: "https://bgltour-b529d.firebaseio.com",
    projectId: "bgltour-b529d",
    storageBucket: "bgltour-b529d.appspot.com",
    messagingSenderId: "744135181738"
  };

  interface GeoJSON {
      
  }