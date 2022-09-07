import React, { Component, useState, useEffect } from "react";
import Nav from "./nav";
import Dropdown from "./dropdown";
import getClickLocation from "../utilities/getClickLocation";
import displayBox from "../utilities/displayBox";
import bg from '../imgs/pierre-roussel-xbox360s-phone2.jpg'

function Xbox() {
  useEffect(() => {

    const checkCoords = (event) => {
      getClickLocation(event);
    //   displayBox(event);
    };
    document.addEventListener("click", checkCoords);
    return () => {
      document.removeEventListener("click", checkCoords);
    };
  });

  return (
    <div className="Xbox" id="Xbox">
         <Nav />
        <img src = {bg} alt="bg" className="bg" id="bg" />
     
      <Dropdown />
    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default Xbox;
