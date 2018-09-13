import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setInterval("refreshImage()", 15000); // ##refresh
    // console.log("Abfrage @" + Date.now())
  }
}
