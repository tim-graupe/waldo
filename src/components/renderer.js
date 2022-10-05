import React, { useState, useEffect } from "react";
import getClickLocation from "../utilities/getClickLocation";
import displayBox from "../utilities/displayBox";

export default function Renderer(props) {
  let [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });

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
    </div>
  );
}
