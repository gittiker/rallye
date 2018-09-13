import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase"
import * as moment from "moment"
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  data = { nickname:'', message:'' };
  chats = [];
  test:string
  offStatus:boolean = false;
  username=""
  // Hide Tabs
  tabBarElement:any;

  constructor() { 
this.username="Admin"
this.data.message = '';
    
firebase.database().ref('chat').on('value', resp => {
  this.chats = [];
  this.chats = snapshotToArray(resp);
  this.chats.reverse()
  
});

  }

  sendMessage() {
    console.log("test")
    let newData = firebase.database().ref('chat').push();
    newData.set({
      user:this.username,
      message:this.data.message,
      sendDate:moment().locale('de').format('DD. MMMM HH:mm')
    });
    this.data.message = '';
    //Chat Achievement Update
    // Daten werden aus der DB gezogen

  }
  ngOnInit() {
  }

}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
