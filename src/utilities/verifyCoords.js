import { useState, useEffect } from "react";
import {marcus} from '../firebase' 

//sets up parameters to check firebase coordinates for a match
async function verifyCoords({ coords }, coord) {

  let x = coords.x;
  let y = coords.y;
  if (x === coord.x && y === coord.y) {
    return true;
  }
}

export default verifyCoords;
