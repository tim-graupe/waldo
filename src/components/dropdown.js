import React, { useState } from "react";
import chars from "../imgs/characters";
import verifyCoords from "../utilities/verifyCoords";

function Dropdown({ coords }) {
  return (
    <div className="dropdown" id="dropdown">
      {chars.map((char) => {
        return (
          <li
            onClick={() => {
              if (verifyCoords({ coords }, char.coords)) {
                char.found = true;
                console.log(chars);
              } else {
                console.log("false");
              }
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
