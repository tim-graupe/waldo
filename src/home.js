import { wiiChars } from "./utilities/charactersObjects";
import { xbox360chars } from "./utilities/charactersObjects";
import { n64Chars } from "./utilities/charactersObjects";
import { pcmrChars } from "./utilities/charactersObjects";
import HomepageCard from "./components/homepageDisplay";

import n64BG from "./imgs/backgrounds/pierre-roussel-n64phone.jpg";
import xb360BG from "./imgs/backgrounds/pierre-roussel-xbox360s-phone2.jpg";
import wiiBG from "./imgs/backgrounds/pierre-roussel-wii-phone2.jpg";
import pcmrBG from "./imgs/backgrounds/pierre-roussel-laptop-deksmat1.jpg";

export default function Homepage() {
  return (
    <>
      <div className="home-header">
        <h1>The Odin Project: Where's Waldo? &#129300;</h1>
        <h4>Gamer Edition</h4>
      </div>
      <div className="home-main">
        <HomepageCard
          bg={n64BG}
          className="card"
          title="N64"
          chars={n64Chars}
        />
        <HomepageCard
          bg={wiiBG}
          className="card"
          title="wii"
          chars={wiiChars}
        />

        <HomepageCard
          bg={xb360BG}
          className="card"
          title="xbox360"
          chars={xbox360chars}
        />

        {/* <HomepageCard
          bg={pcmrBG}
          className="card"
          title="pcmr"
          chars={pcmrChars}
        /> */}
      </div>
    </>
  );
}
