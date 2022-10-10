import React from "react";
import Xbox from "./components/xbox360";
import N64 from "./components/n64";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./home";
import Wii from "./components/wii";
import Pcmr from "./components/pcmr";

function App() {
  return (
    <BrowserRouter>

    <Routes>
    <Route path="/" element={ <Homepage />} />
    <Route path="Xbox" element={<Xbox />} />
    <Route path="N64" element={<N64 />} />
    <Route path="Wii" element={<Wii />} />
    {/* <Route path="PCMR" element={<Pcmr />} /> */}

    </Routes>
    </BrowserRouter>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default App;
