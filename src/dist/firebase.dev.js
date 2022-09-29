"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyCoords = verifyCoords;
exports.addScore = addScore;

require("firebase/analytics");

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/auth");

var _app2 = require("firebase/app");

require("firebase/compat/firestore");

var _firestore2 = require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import firebase, { initializeApp } from "firebase/app";
var firebaseConfig = {
  apiKey: "AIzaSyD0rgSi8JAMT1AUy1jXeKUCITqNjoXSuRI",
  authDomain: "waldo-648ff.firebaseapp.com",
  projectId: "waldo-648ff",
  storageBucket: "waldo-648ff.appspot.com",
  messagingSenderId: "662044481458",
  appId: "1:662044481458:web:16b6201d065a4a3791f6ab"
};

var app = _app["default"].initializeApp(firebaseConfig);

var db = (0, _firestore2.getFirestore)(app);
var docRef = (0, _firestore2.doc)(db, "xbox360", "locations");

function verifyCoords(coord) {
  var docSnap, data, _i, _Object$values, i;

  return regeneratorRuntime.async(function verifyCoords$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _firestore2.getDoc)(docRef));

        case 2:
          docSnap = _context.sent;
          data = docSnap.data();
          _i = 0, _Object$values = Object.values(data);

        case 5:
          if (!(_i < _Object$values.length)) {
            _context.next = 12;
            break;
          }

          i = _Object$values[_i];

          if (!(i.x === coord.x && i.y === coord.y)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", true);

        case 9:
          _i++;
          _context.next = 5;
          break;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

function addScore(Name, Time) {
  var docRef;
  return regeneratorRuntime.async(function addScore$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _firestore2.addDoc)((0, _firestore2.collection)(db, "highscores"), {
            Date: (0, _firestore2.serverTimestamp)(),
            Name: Name,
            Time: Time
          }));

        case 2:
          docRef = _context2.sent;

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
} //use below code to get all documents (locations, high scores and anything else).
// export async function loadCoords(){
//   const querySnapshot = await getDocs(collection(db, 'xbox360'));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data())
//   })
// }
// export default firebase;