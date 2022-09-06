import React from "react";
import imgs from '../imgs/imgs'
function Dropdown() {
  return (
    <div className="dropdown" id="dropdown">
      {imgs.map((char) => {
        return (
      
            <li onClick={() => {
              
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
