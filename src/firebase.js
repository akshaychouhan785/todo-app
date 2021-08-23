
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9aUw99rlAcHTsJS1miUC2NMx0T9rBAxM",
    authDomain: "todo-app-asc-461b6.firebaseapp.com",
    projectId: "todo-app-asc-461b6",
    storageBucket: "todo-app-asc-461b6.appspot.com",
    messagingSenderId: "231812228063",
    appId: "1:231812228063:web:9f69b59dd11cc6f9bcda6a",
    measurementId: "G-7BBYZ6T93M"
  });

  const db = firebaseApp.firestore();

  export default db