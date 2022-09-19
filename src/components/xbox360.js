import React, { useState, useEffect } from "react";
import Dropdown from "./dropdown";
import getClickLocation from "../utilities/getClickLocation";
import displayBox from "../utilities/displayBox";
import bg from "../imgs/pierre-roussel-xbox360s-phone2.jpg";
import Nav from "./nav";
import chars from "../imgs/characters";

function Xbox(props) {
  let [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  let [characters, setCharacters] = useState({chars})

  useEffect(() => {
    const getClickLocation = (e) => {
      const imgWidth = e.target.width;
      const imgHeight = e.target.height;
      const xCoord = e.offsetX;
      const yCoord = e.offsetY;

      const xPercent = Math.floor((xCoord * 100) / imgWidth);

      const yPercent = Math.floor((yCoord * 100) / imgHeight);
      displayBox(e);
      setClickCoords({ x: xPercent, y: yPercent });

    };
    document.addEventListener("click", getClickLocation);
    return () => {
      document.removeEventListener("click", getClickLocation);
    };
  }, [clickCoords]);

  return (
    <>
      <div className="Xbox" id="Xbox">
        <img
          src={bg}
          alt="bg"
          className="bg"
          id="bg"
          onClick={() => getClickLocation}
        />
         
        <Dropdown coords={clickCoords} characters={characters} />
      </div>
    </>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default Xbox;
