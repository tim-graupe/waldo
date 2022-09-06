import React, { Component, useState, useEffect } from "react";
import Nav from "./nav";
import Dropdown from "./dropdown";
import getClickLocation from "../utilities/getClickLocation";
import displayBox from "../utilities/displayBox";
import bg from '../imgs/pierre-roussel-xbox360s-phone2.jpg'

function Xbox() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [zoey, setZoey] = useState(false);
  const [marcus, setMarcus] = useState(false);
  const [mc, setMC] = useState(false);

  const zoeyLocation = { x: 5, y: 27 };
  const marcusLocation = { x: 6, y: 18 };
  const mcLocation = { x: 7, y: 23 };

  useEffect(() => {

    const checkCoords = (event) => {
      getClickLocation(event);
      displayBox(event);
    };
    document.addEventListener("click", checkCoords);
    return () => {
      document.removeEventListener("click", checkCoords);
    };
  }, [zoey, marcus, mc]);

  return (
    <div className="Xbox" id="Xbox">
         <Nav />
        {/* <img src = {bg} alt="bg" className="bg"/> */}
     
      <Dropdown />
    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default Xbox;
