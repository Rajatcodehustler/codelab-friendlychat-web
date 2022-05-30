/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyABp2LZow7YF658xd3IPxXgCblUmJOExqg",
  authDomain: "friendlychat-752b0.firebaseapp.com",
  projectId: "friendlychat-752b0",
  storageBucket: "friendlychat-752b0.appspot.com",
  messagingSenderId: "810205758078",
  appId: "1:810205758078:web:14cca8137235200e820e2f",
  measurementId: "G-YS7DX5RQ9E"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
