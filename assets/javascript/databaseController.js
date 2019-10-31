
//Step 1 Initialize firebase Config
var firebaseConfig = {
    apiKey: "AIzaSyCEySl1OqSqnH1j2qshUj1L-9B4Q1cvJTM",
    authDomain: "sweettoothcakeshop-54dc9.firebaseapp.com",
    databaseURL: "https://sweettoothcakeshop-54dc9.firebaseio.com",
    projectId: "sweettoothcakeshop-54dc9",
    storageBucket: "sweettoothcakeshop-54dc9.appspot.com",
    messagingSenderId: "754585056168",
    appId: "1:754585056168:web:d761a7afc85b677a1d639d",
    measurementId: "G-W5M9TPHCPB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Create a database object in order to use later in code.
let database = firebase.database();