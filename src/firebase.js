import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0rgSi8JAMT1AUy1jXeKUCITqNjoXSuRI",

  authDomain: "waldo-648ff.firebaseapp.com",

  projectId: "waldo-648ff",

  storageBucket: "waldo-648ff.appspot.com",

  messagingSenderId: "662044481458",

  appId: "1:662044481458:web:16b6201d065a4a3791f6ab",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
