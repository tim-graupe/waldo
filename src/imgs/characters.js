import marcusF from "./imgs folder/marcus.png";
import chief from "./imgs folder/chief.png";
import zoey from "./imgs folder/zoey.png";

const mcObj = {
  id: "Chief",
  img: chief,
  alt: "master-chief",
  found: false,
  coords: { x: 74, y: 59 },
};
const marcusObj = {
  id: "Marcus",
  img: marcusF,
  alt: "marcus",
  found: false,
  coords: { x: 57, y: 51 },
};
const zoeyObj = {
  id: "Zoey",
  img: zoey,
  alt: "zoey",
  found: false,
  coords: { x: 50, y: 67 },
};

const chars = [mcObj, zoeyObj, marcusObj];

export default chars;
