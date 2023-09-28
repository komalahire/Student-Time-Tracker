import logo from "./logo.svg";
import "./App.css";
// import ReactGA from "react-ga";
// import { useHistory } from "react-router-dom";
import { useEffect } from "react";
// ReactGA.initialize("G-YBB9SYP3SQ");

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
      <buton onClick={handleClick}>Login</buton>
    </div>
  );
}

export default App;
