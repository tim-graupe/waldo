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
  collection,
  getDocs,
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
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

//checks firebase to verify click location and returns character name if it is a match
export async function verifyCoords(coord) {
  const docRef = doc(db, "xbox360", "locations");

  let result = "";
  const docSnap = await getDoc(docRef);
  let data = docSnap.data();
  for (let [key, value] of Object.entries(data)) {
    if (
      (value.x === coord.clickCoords.x && value.y === coord.clickCoords.y) ||
      (value.x === coord.clickCoords.x + 1 &&
        value.y === coord.clickCoords.y) ||
      (value.x === coord.clickCoords.x + 2 &&
        value.y === coord.clickCoords.y) ||
      (value.x === coord.clickCoords.x - 1 &&
        value.y === coord.clickCoords.y) ||
      (value.x === coord.clickCoords.x - 2 &&
        value.y === coord.clickCoords.y) ||
      (value.x === coord.clickCoords.x &&
        value.y === coord.clickCoords.y + 1) ||
      (value.x === coord.clickCoords.x &&
        value.y === coord.clickCoords.y + 2) ||
      (value.x === coord.clickCoords.x &&
        value.y === coord.clickCoords.y - 1) ||
      (value.x === coord.clickCoords.x && value.y === coord.clickCoords.y - 2)
    ) {
      result = key;
    }
  }
  return result;
}
//adds score from firebase once all characters are successfully found
export async function addScore(Name, Time, Level) {
  //props are set up for N64 as an example. rewrite this code so it can filter based on Level
  const docRef = await addDoc(collection(db, Level), {
    Date: serverTimestamp(),
    Name: Name,
    Time: `${Time} seconds`,
    Level: Level
  });
  getHighScore(Level);
}

//fetches scores from firebase and displays in order from shortest time.
export async function getHighScore(props) {
  const table = document.getElementById("tbody");
  let sb = document.getElementById("scoreboard");
  table.textContent = "";
  if (sb.style.display === "none") {
    sb.style.display = "table";
  } else {
    sb.style.display = "none";
  }
  let tableArr = [];

  const querySnapshot = await getDocs(collection(db, props));
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
