import { useState } from "react";

const GetClickLocation = (e) => {
  const [coords, setCoords] = useState({ x: 57, y: 51 });

  const imgWidth = e.target.width;
  const imgHeight = e.target.height;
  const xCoord = e.offsetX;
  const yCoord = e.offsetY;

  const xPercent = Math.floor((xCoord * 100) / imgWidth);

  const yPercent = Math.floor((yCoord * 100) / imgHeight);
  setCoords({ x: xPercent, y: yPercent });
  return <div>{coords}</div>;
};

export default GetClickLocation;
