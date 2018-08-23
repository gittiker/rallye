import { Injectable } from '@angular/core';
import * as firebase from "firebase"

@Injectable()
export class Globals {
    db_data: any=[]

    test:any = {
        "type": "Feature",
        "properties": {
            "message": "Foo",
            "iconSize": [60, 60]
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5,
                5
            ]
        }
    }


    constructor(){

        firebase.initializeApp(firebaseConfig)
        firebase.database().ref("/groups/").on("value", data=>{
            this.db_data = data.exportVal()
            let userKeys = Object.keys(this.db_data)
            for(let user of userKeys) {
            console.log(this.db_data[user].adress.long)
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