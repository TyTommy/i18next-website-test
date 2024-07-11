import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./routes/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;