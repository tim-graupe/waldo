import React, { useState, useEffect } from "react";
import getClickLocation from "../utilities/getClickLocation";
import displayBox from "../utilities/displayBox";
import { verifyCoords } from "../firebase";
import gameOver from "../utilities/gameover";

export default function Renderer(props) {
  let [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  const { chars } = props;

  useEffect(() => {
    const getClickLocation = (e) => {
      const imgWidth = e.target.width;
      const imgHeight = e.target.height;
      const xCoord = e.offsetX;
      const yCoord = e.offsetY;

      const xPercent = Math.floor((xCoord * 100) / imgWidth);

      const yPercent = Math.floor((yCoord * 100) / imgHeight);
      setClickCoords({ x: xPercent, y: yPercent });
      displayBox(e);
    };
    document.addEventListener("click", getClickLocation);
    return () => {
      document.removeEventListener("click", getClickLocation);
    };
  }, [clickCoords]);

  return (
    <div>

      <img
        width="100%"
        src={props.bg}
        alt={props.bg}
        className="bg"
        id="bg"
        onClick={() => getClickLocation}
      />

<div className="dropdown" id="dropdown">
        {chars.map((char) => {
          return (
            <li
              key={char.id}
              id={char.id}
              onClick={() => {
                document.getElementById("dropdown").style.display = "none";
                verifyCoords({ clickCoords }).then((result) => {
                  if (result === char.alt) {
                    char.found = true;
                    document.getElementById(`${char.id}`).style.display =
                      "none";
                    gameOver(chars);
                  } else {
                    // console.log(result, char.alt);
                  }
                });
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
    </div>
  );
}
