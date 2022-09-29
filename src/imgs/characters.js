import marcusF from "./imgs folder/marcus.png";
import chief from "./imgs folder/chief.png";
import zoey from "./imgs folder/zoey.png";

const mcObj = {
  id: "Chief",
  img: chief,
  alt: "master-chief",
  found: false,
  
};
const marcusObj = {
  id: "Marcus",
  img: marcusF,
  alt: "marcus",
  found: false,
};
const zoeyObj = {
  id: "Zoey",
  img: zoey,
  alt: "zoey",
  found: false,
};

const chars = [mcObj, zoeyObj, marcusObj];

export default chars;
