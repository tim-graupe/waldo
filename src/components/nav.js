import React from "react";
import marcus from "../imgs/imgs folder/marcus.png";
import zoey from "../imgs/imgs folder/zoey.png";
import chief from "../imgs/imgs folder/chief.png";
import showMenu from "../utilities/showMenu"
function Nav() {
  return (
    <div className="nav">
      <img src={marcus} className="icons" alt="marcus" id="marcus" />
      <img src={zoey} className="icons" alt="zoey" id="zoey" />
      <img src={chief} className="icons" alt="chief" id="chief" />
      <button id="menu" className="menu" onClick={() => {showMenu()}}>Menu</button>
      <table id="scoreboard" className="scoreboard">
        <thead id="thead">
        <tr>
          <th>Name</th>
          <th>Time</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody className="tbody" id="tbody"></tbody>
      </table>
    </div>
  );
}

export default Nav;
