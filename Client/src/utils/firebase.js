import firebase from 'firebase'

const  firebaseConfig = {
    apiKey: "AIzaSyB5YkIg6xc0c5VB0nVTNiKVWcUv3n8hxps",
    authDomain: "dashbord-tanzman.firebaseapp.com",
    databaseURL: "https://dashbord-tanzman-default-rtdb.firebaseio.com",
    projectId: "dashbord-tanzman",
    storageBucket: "dashbord-tanzman.appspot.com",
    messagingSenderId: "865432127112",
    appId: "1:865432127112:web:5d84088f2856a70def813d",
    measurementId: "G-888L269QNK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;