import { useState, useEffect } from "react";
import chars from "../imgs/characters";
import getClickLocation from "./getClickLocation";
import Xbox from "../components/xbox360";

function verifyCoords({ coords }, coord) {
  let x = coords.x;
  let y = coords.y;
  if (x === coord.x && y === coord.y) {
    return true;
  }
}

export default verifyCoords;
