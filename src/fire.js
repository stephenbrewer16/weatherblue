import firebase from 'firebase'
var config = { 
    apiKey: "AIzaSyBcW1wu96vGiL5BY9KmqvYXDOVB4dgZPg0",
    authDomain: "blue-firenyg.firebaseapp.com",
    databaseURL: "https://blue-firenyg.firebaseio.com",
    storageBucket: "blue-firenyg.appspot.com",
    messagingSenderId: "915285727256"
};
var fire = firebase.initializeApp(config);
export default fire;