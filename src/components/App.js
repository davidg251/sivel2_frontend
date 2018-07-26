import React from "react";
import Menu from "./Menu.js";
import Main from "./Main.js";
import TopBar from "./TopBar.js";
import './App.css';

const App = () => (
  <div className="app-layout">
    <TopBar/>
    <div className="app-container">
      <Menu />
      <Main />
    </div>
  </div>
);

export default App;
