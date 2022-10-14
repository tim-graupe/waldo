import React from "react";
import { getHighScore } from "../firebase";
export default function Nav(props) {
  const { chars } = props;

  function showMenu() {
    const nav = document.querySelector(".nav-menu-content");

    nav.style.display === "block"
      ? (nav.style.display = "none")
      : (nav.style.display = "block");
  }
  return (
    <div className="nav">
      {chars.map((char) => {
        return (
          <img
            key={char.id}
            src={char.img}
            // id={char.id}
            alt={char.alt}
            className="icons"
          />
        );
      })}
      <button className="nav-menu" onClick={() => showMenu()}>
        Menu
        <div className="nav-menu-content">
          <a href="/">HOME</a>
          <a href="/XBOX">XBOX 360</a>
          <a href="/N64">N64</a>
          {/* <a href="/PCMR">PCMR</a> */}
          <a href="/WII">WII</a>
          <div id="hs" onClick={() => getHighScore(props.level)}>High Scores</div>
        </div>
        </button>

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
