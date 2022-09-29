import React from "react";
import Xbox from "./components/xbox360";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App" id="App">
      <Nav className="nav-bar"/>

      <Xbox />
    </div>
  );
}

//remember: npm start to host, npm run build => firebase deploy to host
export default App;
