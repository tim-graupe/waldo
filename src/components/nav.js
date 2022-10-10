import React from "react";

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
            id={char.id}
            alt={char.alt}
            className="icons"
          />
        );
      })}
      <button className="nav-menu" onClick={() => showMenu()}>
        Menu
        <div className="nav-menu-content">
          <a href="/">HOME</a>
          <a href="/XBOX">XBOX</a>
          <a href="/N64">N64</a>
          <a href="/PCMR">PCMR</a>
          <a href="/WII">WII</a>
        </div>
      </button>
      <div id="mobile-menu"></div>
    </div>
  );
}
