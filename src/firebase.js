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
let time = 0;
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const docRef = doc(db, "xbox360", "locations");

//checks firebase to verify click location
export async function verifyCoords(coord) {
  let found = false;
  const docSnap = await getDoc(docRef);

  let data = docSnap.data();
  for (let i of Object.values(data)) {
    if (i.x === coord.coords.x && i.y === coord.coords.y) {
      found = true;
    }
  }
  return found;
}
//adds score from firebase once all characters are successfully found
export async function addScore(Name, Time) {
  const docRef = await addDoc(collection(db, "highscores"), {
    Date: serverTimestamp(),
    Name: Name,
    Time: `${Time} seconds`,
  });
  getHighScore();
}

//fetches scores from firebase and displays in order from shortest time.
export async function getHighScore() {
  const table = document.getElementById("tbody");
  let sb = document.getElementById("scoreboard");
  table.innerHTML = "";
  if (sb.style.display === "none") {
    sb.style.display = "table";
  } else {
    sb.style.display = "none";
  }
  let tableArr = [];

  const querySnapshot = await getDocs(collection(db, "highscores"));
  querySnapshot.forEach((doc) => {
    tableArr.push(doc.data());
  });

  tableArr.sort(function (a, b) {
    return parseFloat(a.Time) - parseFloat(b.Time);
  });

  for (const obj of tableArr) {
    let date = obj.Date.toDate().toLocaleDateString();
    const tr = document.createElement("tr");
    const content = `<td>${obj.Name}</td>
    <td>${obj.Time}</td>
    <td>${date}</td>`;
    tr.innerHTML = content;
    table.appendChild(tr);
  }
}

// export default firebase;
