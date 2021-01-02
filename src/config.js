import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFove9Lm5ce8-qJYiiy7O8wIndA_Rqvak",
    authDomain: "hgceportal.firebaseapp.com",
    databaseURL: "https://hgceportal.firebaseio.com",
    projectId: "hgceportal",
    storageBucket: "hgceportal.appspot.com",
    messagingSenderId: "390651078307",
    appId: "1:390651078307:web:ba7aae7428f0fbe0608116",
    measurementId: "G-7TZGZT0W46"
  };
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  export {db,auth,storage}