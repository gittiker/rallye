import * as firebase from 'firebase';
import { Globals } from './globals';

export class Group {
    dbdata: Globals[];
    id: string;
    name: string;
    location: Adress;

    constructor(id: string, name: string, location: Adress) {
        this.id = id;
        this.name = name;
        this.location = location;
    }
}

export class Adress {
    lat: string;
    long: string;

    constructor(lat: string, long: string) {
        this.lat = lat;
        this.long = long
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