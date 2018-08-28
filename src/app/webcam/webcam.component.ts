import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.setInterval("refreshImage()", 10000);
    // console.log("Abfrage @" + Date.now())
  }
}
