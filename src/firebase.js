// import firebase, { initializeApp } from "firebase/app";
import "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import {
  getFirestore,
  doc,
  getDoc,
  DocumentSnapshot,
  query,
  collection,
  getDocs,
  where,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0rgSi8JAMT1AUy1jXeKUCITqNjoXSuRI",

  authDomain: "waldo-648ff.firebaseapp.com",

  projectId: "waldo-648ff",

  storageBucket: "waldo-648ff.appspot.com",

  messagingSenderId: "662044481458",

  appId: "1:662044481458:web:16b6201d065a4a3791f6ab",
};
let time = 0
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const docRef = doc(db, "xbox360", "locations");

//checks firebase to verify click location
export async function verifyCoords(coord) {
  const docSnap = await getDoc(docRef);

  let data = docSnap.data();
  for (let i of Object.values(data)) {
    if (i.x === coord.x && i.y === coord.y) {
      return true;
    }
  }
}
//adds score from firebase once all characters are successfully found
export async function addScore(Name, Time) {
  const docRef = await addDoc(collection(db, "highscores"), {
    Date: serverTimestamp(),
    Name: Name,
    Time: Time,
  });
  getHighScore();
}
//fetches scores from firebase
export async function getHighScore() {
  const querySnapshot = await getDocs(collection(db, "highscores"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
  
}


// export default firebase;
