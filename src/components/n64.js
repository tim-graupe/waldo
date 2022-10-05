import React, { useState } from "react";
import Nav from "./nav";
import Dropdown from "./dropdown";
import bg from "../imgs/backgrounds/pierre-roussel-n64phone.jpg";
import Renderer from "./renderer";
import {n64Chars} from "../utilities/charactersObjects.js";
//conker: x 39 y: 56
//kazooie: x84 y: 56
//link: x 30 y: 44
function N64(props) {
  const [chars, setChars] = useState(n64Chars)

  return (
    <div>
      <Nav chars={chars} />
      <Dropdown chars={chars} />

      <Renderer bg={bg} />
    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default N64;
