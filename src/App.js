// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const [mystyle1, setMyStyle1] = useState({
    display: "block",
  });
  const [mystyle2, setMyStyle2] = useState({
    display: "none",
  });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode1 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setMyStyle1({
        display: "none",
      });
      setMyStyle2({
        display: "block",
      });
      showAlert("dark mode has been enabled", "success");
    }
  };
  const togglemode2 = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setMyStyle2({
        display: "none",
      });
      setMyStyle1({
        display: "block",
      });
      showAlert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          modes={mode}
          togglemode1={togglemode1}
          togglemode2={togglemode2}
          mystyle1={mystyle1}
          mystyle2={mystyle2}
        />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route path="/">
              <TextForm
                heading="Enter your text"
                modes={mode}
                showAlert={showAlert}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
