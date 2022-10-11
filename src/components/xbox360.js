import React, { useState } from "react";
import Dropdown from "./dropdown";
import Nav from "./nav";
import bg from "../imgs/backgrounds/pierre-roussel-xbox360s-phone2.jpg";
import { xbox360chars } from "../utilities/charactersObjects.js";
import Renderer from "./renderer";

function Xbox() {
  const [chars] = useState(xbox360chars);
  return (
    <div>
      {/* <Dropdown chars={chars} /> */}
      <Nav chars={chars} />
      <Renderer bg={bg} chars={chars}/>

    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default Xbox;
