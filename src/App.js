import "./App.css";
import Navbar from "./component/Navbar";
import React, { useState } from "react";
import TextFrom from "./component/TextFrom";
// import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
function App() {
  const [modeText, setmodeText] = useState("Enable dark Mode");
  const [Textcolor, setTextcolor] = useState({
    color: "black",
  });
  const [mode, setmode] = useState("light");
  const [Textback, setTextback] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const modefun = () => {
    if (mode === "light") {
      showalert("Dark Mode on", "success");
      setmodeText("Enable light Mode");
      setmode("dark");
      document.body.style.backgroundColor = "#3e3840";
      setTextcolor({
        color: "white",
      });
      setTextback({ backgroundColor: "#c1a7ce", color: "white" });
    } else {
      showalert("Light Mode on", "success");
      setmode("light");
      setmodeText("Enable dark Mode");
      document.body.style.backgroundColor = "white";
      setTextcolor({
        color: "black",
      });
    }
    setTextback({ backgroundColor: "white", color: "black" });
  };
  const [alert, setalert] = useState(null);
  const showalert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Text Editor"
          About="About us"
          modeText={modeText}
          mode={mode}
          modefun={modefun}
          Textcolor={Textcolor}
        />
    
        <div className="container ">
          {/* <Switch> */}
            {/* <Route path="/home"> */}
              <TextFrom
                showalert={showalert}
                heading="Edit Text"
                mode={mode}
                Textcolor={Textcolor}
                Textback={Textback}
              />
            
        </div>
      {/* </Router>  */}
    </>
  );
}

export default App;
