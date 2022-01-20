import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          {/* <Route path="/pack" element={<Pack />} /> */}
          <Route path="/projet" element={<Project />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
