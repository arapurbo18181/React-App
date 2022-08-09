// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const[mode, setMode] = useState("light");
  const[mystyle1, setMyStyle1] = useState({
    display : "block"
  });
  const[mystyle2, setMyStyle2] = useState({
    display : "none"
  });
  const togglemode1 = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setMyStyle1({
        display : "none"
      });
      setMyStyle2({
        display : "block"
      });
    }
  }
  const togglemode2 = () => {
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      setMyStyle2({
        display : "none"
      });
      setMyStyle1({
        display : "block"
      });
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About Us" modes={mode} togglemode1={togglemode1} togglemode2={togglemode2} mystyle1={mystyle1} mystyle2={mystyle2} />
      <div className="container">
        <TextForm heading="Enter your text" modes={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
