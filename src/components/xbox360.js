import React, { useState } from "react";
import Nav from "./nav";
import bg from "../imgs/backgrounds/xbox360.jpg";
import { xbox360chars } from "../utilities/charactersObjects.js";
import Renderer from "./renderer";

function Xbox() {
  const [chars] = useState(xbox360chars);

  return (
    <div>
      <Renderer bg={bg} chars={chars} level="xbox" />
      <Nav chars={chars} level="xbox" />

    </div>
  );
}
export default Xbox;
