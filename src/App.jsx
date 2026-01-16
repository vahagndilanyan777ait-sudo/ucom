import React from "react";
import Home from './pages/Home';
import Roaming from "./pages/Roaming";
import ForHome from "./pages/ForHome";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roaming" element={<Roaming />} />
          <Route path="/forHome" element={<ForHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
