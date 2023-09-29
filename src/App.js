import React, { useEffect, useState } from "react";
import Pathways from "./components/pathways";
import PathwayExercise from "./components/PathwayExercise";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header.js";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pathways />} />
          <Route path="/:name" element={<PathwayExercise />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Pathways /> */}

        {/* <PathwayExercise /> */}
      </BrowserRouter>
    </>
  );
};
export default App;
