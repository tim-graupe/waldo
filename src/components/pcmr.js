import React, { useState } from "react";
import Dropdown from "./dropdown";
import Nav from "./nav";
import bg from "../imgs/backgrounds/pierre-roussel-laptop-deksmat1.jpg";
import { pcmrChars } from "../utilities/charactersObjects.js";
import Renderer from "./renderer";

function Pcmr() {
  const [chars] = useState(pcmrChars);

  return (
    <div>
      <Nav chars={chars} />
      <Dropdown chars={chars} />

      <Renderer bg={bg} />
    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default Pcmr;
