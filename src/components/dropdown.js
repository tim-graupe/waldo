import React from "react";
import { verifyCoords } from "../firebase";
import chars from "../imgs/characters";
import gameOver from "../utilities/gameover";

function Dropdown({ coords }) {



  return (
    <div className="dropdown" id="dropdown">
      {chars.map((char) => {
        return (
          <li key={char.id}
            onClick={() => {
              if (verifyCoords({coords})) {
                char.found = true;
                console.log(chars)
              } else {
                // console.log(chars);
              }
              gameOver();
            }}
          >
            <img
              className="dropdown-icons"
              key={char.id}
              src={char.img}
              alt={char.alt}
            />
            <p className="dropdown-name">{char.id}</p>
          </li>
        );
      })}
    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default Dropdown;
