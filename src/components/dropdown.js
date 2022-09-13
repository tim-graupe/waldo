import React from "react";
import chars from '../imgs/characters'
import GetClickLocation from "../utilities/getClickLocation";
import VerifyCoords from "../utilities/verifyCoords";
function Dropdown() {
  return (
    <div className="dropdown" id="dropdown">
      {chars.map((char) => {
        return (
      
            <li onClick={() => {
              
              <VerifyCoords xPercent = {char.coords.x}
              yPercent = {char.coords.y} />

            }}>
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
