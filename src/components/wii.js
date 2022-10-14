import React, { useState } from "react";
import Nav from "./nav";
import bg from "../imgs/backgrounds/wii.jpg";
import { wiiChars } from "../utilities/charactersObjects.js";
import Renderer from "./renderer";

function Wii() {
  const [chars] = useState(wiiChars);
  
  return (
    <div>
      <Renderer bg={bg} chars={chars} level="wii" />
      <Nav chars={chars} level="wii" />
    </div>
  );
}
export default Wii;
