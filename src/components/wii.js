import React, { useState } from "react";
import Dropdown from "./dropdown";
import Nav from "./nav";
import bg from "../imgs/backgrounds/pierre-roussel-wii-phone2.jpg";
import { wiiChars } from "../utilities/charactersObjects.js";
import Renderer from "./renderer";

function Wii() {
  const [chars] = useState(wiiChars);

  return (
    <div>
      <Nav chars={chars} />
      <Dropdown chars={chars} />

      <Renderer bg={bg} />
    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default Wii;
