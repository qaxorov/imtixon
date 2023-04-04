import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/main.jsx";
import { Route, Router, Routes } from "react-router-dom";
import { Episode } from "./pages/Episode/Episode";
import { Location } from "./pages/Location/Location";
import ELement from "./pages/Element/ELement.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/location" element={<Location />} />
        <Route path="/element/:id" element={<ELement />} />

      </Routes>
    </div>
  );
}
