import React from "react";
import TestIcon from "./pages/testIcon";
import TestButton from "./pages/testButton";
import TestRadio from "./pages/testRadio";
import TestDemo from "./pages/testDemo";
import TestCodemirror from "./pages/testCodemirror";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App-wrap">
      <div className="App-link-group">
        <NavLink to="/icon">Test Icon</NavLink>
        <NavLink to="/button">Test Button</NavLink>
        <NavLink to="/radio">Test Radio</NavLink>
        <NavLink to="/demo">Demo Todo</NavLink>
        <NavLink to="/codemirror">Codemirror Todo</NavLink>
      </div>

      <div className="App-link-body">
        <Routes>
          <Route path="/icon" element={<TestIcon />} />
          <Route path="/button" element={<TestButton />} />
          <Route path="/radio" element={<TestRadio />} />
          <Route path="/codemirror" element={<TestCodemirror />} />
          <Route path="/demo" element={<TestDemo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
