import React, { useState } from "react";
import Nav from "./nav";
import bg from "../imgs/backgrounds/n64.jpg";
import Renderer from "./renderer";
import { n64Chars } from "../utilities/charactersObjects.js";

function N64() {
  const [chars] = useState(n64Chars);


  return (
    <div>
      <Renderer bg={bg} chars={chars} level="N64" />
      <Nav chars={chars} level="N64" />
    </div>
  );
}

export default N64;
