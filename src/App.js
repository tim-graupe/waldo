import React, { Component, useState, useEffect } from "react";
import Dropdown from "./components/dropdown";
import Xbox from "./components/xbox360";
import Nav from "./components/nav";

function App() {

  return (
  
    <div className="App" id="App">
              <Nav/>

      <Xbox />
    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default App;
