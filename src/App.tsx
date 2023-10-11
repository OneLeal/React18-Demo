import React from "react";
import TestButton from "./pages/testButton";
import TestRadio from "./pages/testRadio";
import TestDemo from "./pages/testDemo";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App-wrap">
      <div className="App-link-group">
        <NavLink to="/button">Test Button</NavLink>
        <NavLink to="/radio">Test Radio</NavLink>
        <NavLink to="/demo">Demo Todo</NavLink>
      </div>

      <div className="App-link-body">
        <Routes>
          <Route path="/button" element={<TestButton />} />
          <Route path="/radio" element={<TestRadio />} />
          <Route path="/demo" element={<TestDemo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
