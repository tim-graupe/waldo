// import React from "react";
// import { verifyCoords } from "../firebase";
// import gameOver from "../utilities/gameover";
// export default function Dropdown(props) {
//   const { chars, clickCoords } = props;

//   return (
//     <div className="dropdown" id="dropdown">
//       {chars.map((char) => {
//         return (
//           <li
//             key={char.id}
//             id={char.id}
//             onClick={() => {
//               console.log(clickCoords)
//               document.getElementById("dropdown").style.display = "none";
//               verifyCoords({ clickCoords }).then((result) => {
//                 if (result === char.alt) {
//                   char.found = true;
//                   document.getElementById(`${char.id}`).style.display = "none";
//                   gameOver();
//                 } else {
//                   // console.log(result, char.alt);
//                 }
//               });
//             }}
//           >
//             <img
//               className="dropdown-icons"
//               key={char.id}
//               src={char.img}
//               alt={char.alt}
//             />
//             <p className="dropdown-name">{char.id}</p>
//           </li>
//         );
//       })}
//     </div>
//   );
// }

// //remember: npm start to host, npm run build => firebase deploy to host
