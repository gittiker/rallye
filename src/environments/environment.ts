// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBQ_zgFYn4O8pTmvcNPJRCJkK8Vq9bOwo8",
    authDomain: "bgltour-b529d.firebaseapp.com",
    databaseURL: "https://bgltour-b529d.firebaseio.com",
    projectId: "bgltour-b529d",
    storageBucket: "bgltour-b529d.appspot.com",
    messagingSenderId: "744135181738"
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoibWFwbm9vYiIsImEiOiJjamtrMjBrazQxbHByM3ZueGp1Y3pkaWZxIn0.q5ce20FZh7u2tOVBxsomFA'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
