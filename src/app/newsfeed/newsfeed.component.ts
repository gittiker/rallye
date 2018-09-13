import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
dataa={}
dataKeys=[]
  constructor() { 
    // firebase.initializeApp(environment.firebase);
    firebase.database().ref("/Feed").on("value", data=>{
   
    this.dataa = data.val();
    
    this.dataKeys=Object.keys(this.dataa).reverse();
    })
  }

  dropKey(key) {

  };

  ngOnInit() {
   
  }

}