import { Component } from '@angular/core';
import * as firebase from "firebase"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(){

  firebase.initializeApp(firebaseConfig)

  firebase.database().ref("/").once("value", data=>{
    let dataa = data.exportVal()
    console.log(dataa.groups)
    console.log(data.exportVal())
  })
}

}


export const firebaseConfig = {
  apiKey: "AIzaSyBQ_zgFYn4O8pTmvcNPJRCJkK8Vq9bOwo8",
  authDomain: "bgltour-b529d.firebaseapp.com",
  databaseURL: "https://bgltour-b529d.firebaseio.com",
  projectId: "bgltour-b529d",
  storageBucket: "bgltour-b529d.appspot.com",
  messagingSenderId: "744135181738"
};
