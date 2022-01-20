import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Pack from "./components/Pack";

import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/projet" element={<Project />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Pack />
      </HashRouter>
    </div>
  );
}

export default App;
