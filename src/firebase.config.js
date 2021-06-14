import firebase from 'firebase/app';

var firebaseConfig = {
  apiKey: "AIzaSyCP29qokYzC7kWbb9yp_77DimTa0y3k0NY",
  authDomain: "my-realestate-eac50.firebaseapp.com",
  databaseURL: "https://my-realestate-eac50-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-realestate-eac50",
  storageBucket: "my-realestate-eac50.appspot.com",
  messagingSenderId: "669657937820",
  appId: "1:669657937820:web:b9bc85eba2781e3f02fa59"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase;