import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Pack from "./components/Pack";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Pack />
      </HashRouter>
    </div>
  );
}

export default App;
