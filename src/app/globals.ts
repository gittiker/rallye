import { Injectable } from '@angular/core';
import * as firebase from "firebase"

@Injectable()
export class Globals {
    db_data:any={test:"hallo"}
    constructor(){

        firebase.initializeApp(firebaseConfig)
        firebase.database().ref("/").once("value", data=>{
            this.db_data = data.exportVal()
            console.log(data.exportVal())
            console.log(this.db_data)
        })
        // firebase.database().ref("/").once("value", data=>{
        //     let dataa = data.exportVal()
        //     // console.log(dataa.groups)
        //     // console.log(data.exportVal())
        // })
    }

    // OnInit() {
    //     firebase.database().ref("/").once("value", data=>{
    //         this.db_data = data.exportVal()
    //     })
    // }

   
    test: string = "Test";
  
}

export const firebaseConfig = {
    apiKey: "AIzaSyBQ_zgFYn4O8pTmvcNPJRCJkK8Vq9bOwo8",
    authDomain: "bgltour-b529d.firebaseapp.com",
    databaseURL: "https://bgltour-b529d.firebaseio.com",
    projectId: "bgltour-b529d",
    storageBucket: "bgltour-b529d.appspot.com",
    messagingSenderId: "744135181738"
  };