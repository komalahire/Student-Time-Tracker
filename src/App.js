import logo from "./logo.svg";
import "./App.css";
// import ReactGA from "react-ga";
// import { useHistory } from "react-router-dom";
import { useEffect } from "react";
// ReactGA.initialize("G-YBB9SYP3SQ");
import Pathways from "./Pages/pathways";
import PathwayExercise from "./Pages/PathwayExercise";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const history = useHistory();

  const handleClick = () => {
    console.log("clicked");
    window.gtag("event", "enroll", {
      event_category: "Course Enrollment",
      event_label: "Python",
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pathways/>}/>
        <Route path="/course-content" element={<PathwayExercise/> } />
          
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
