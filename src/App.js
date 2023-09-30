import React, { useEffect, useState } from "react";
import Pathways from "./components/pathways";
import PathwayExercise from "./components/PathwayExercise";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header.js";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const locationd = useLocation();

  const [oldHistory, setOldHistory] = useState(null);

  const [location, setLocation] = useState({ lat: null, long: null });
  useEffect(() => {
    console.log(oldHistory, locationd);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, long: longitude });
      });
    }
    if (oldHistory?.pathname !== locationd.pathname) {
      locationd.timestamp = Date.now();
      locationd.os = window.navigator.platform;
      locationd.latitude = location.lat;
      locationd.longitude = location.long;
      setOldHistory(locationd);
      window.scrollTo(0, 0);
    }
  }, [locationd]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pathways />} />
        <Route path="/:name" element={<PathwayExercise />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Pathways /> */}

      {/* <PathwayExercise /> */}
    </>
  );
};
export default App;
