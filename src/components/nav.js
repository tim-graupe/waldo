import React, { Component, useState, useEffect } from "react";
import marcus from "../imgs/imgs folder/marcus.png";
import zoey from "../imgs/imgs folder/zoey.png";
import chief from "../imgs/imgs folder/chief.png";

function Nav() {
  return (
    <div className="nav">
      <img src={marcus} className="icons" alt="marcus" id="marcus" />
      <img src={zoey} className="icons" alt="zoey" id="zoey" />
      <img src={chief} className="icons" alt="chief" id="chief" />
    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default Nav;
