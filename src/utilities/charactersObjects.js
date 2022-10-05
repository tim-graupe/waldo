import marcusF from "../imgs/characters/marcus.png";
import chief from "../imgs/characters/chief.png";
import zoey from "../imgs/characters/zoey.png";

import link from "../imgs/characters/link.png";
import conker from "../imgs/characters/conker.png";
import kazooie from "../imgs/characters/kazooie.png";

import kirby from "../imgs/characters/kirby.png";
import samus from "../imgs/characters/samus.png";
import diddyKong from "../imgs/characters/diddykong.png";

import pudge from "../imgs/characters/pudge.png";
import steve from "../imgs/characters/steve.png";
import amogus from "../imgs/characters/amogus.png";


//xbox360 chars
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
//end xbox360 chars

//n64 chars
const linkObj = {
  id: "Link",
  img: link,
  alt: "link",
  found: false,
};

const conkerObj = {
  id: "Conker",
  img: conker,
  alt: "conker",
  found: false,
};

const kazooieObj = {
  id: "Kazooie",
  img: kazooie,
  alt: "kazooie",
  found: false,
};
//end n64 chars

//wii chars

const samusObj = {
  id: "Samus",
  img: samus,
  alt: "samus",
  found: false,
};

const diddyKongObj = {
  id: "Diddy",
  img: diddyKong,
  alt: "Diddy",
  found: false,
};

const kirbyObj = {
  id: "Kirby",
  img: kirby,
  alt: "kirby",
  found: false,
};

//end wii chars

//start pcmr chars

const pudgeObj = {
  id: "pudge",
  img: pudge,
  alt: "pudge",
  found: false,
};

const steveObj = {
  id: "steve",
  img: steve,
  alt: "steve",
  found: false,
};

const amogusObj = {
  id: "amogus",
  img: amogus,
  alt: "amogus",
  found: false,
};
//end pcmr chars


export const xbox360chars = [mcObj, zoeyObj, marcusObj];
export const n64Chars = [linkObj, conkerObj, kazooieObj];
export const wiiChars = [kirbyObj, samusObj, diddyKongObj];
export const pcmrChars = [pudgeObj, steveObj, amogusObj];
