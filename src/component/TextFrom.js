import React, { useState } from "react";
// main fun
export default function TextFrom(props) {
  const [text, setText] = useState(""); //text use state
  /////// upper fun
  const clickupper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Upper Case", "convert");
  }; //end
  ////////lower fun //////
  const clicklower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Lower Case", "convert");
  }; //end
  ////////chane text fun //////////
  const changetext = (event) => {
    setText(event.target.value);
  }; // end
  ///clear fun //////
  function clickclear() {
    setText("");
    props.showalert("Clipbroad", "Clear");
  } //// end
  //////copy fun ///////////
  const clickcopy = () => {
    navigator.clipboard.writeText(text);
    setText(text);
    props.showalert("Copy Clipbroad", "Copied!");
  }; //end
  /////////// paste fun ////////////
  const clickpaste = () => {
    navigator.clipboard.readText().then(function (text) {
      setText(text);
    });
    props.showalert("Paste Clipbroad", "Pastes");
  }; //end
  const link = () => {};
  return (
    <>
      <div className="container my-3" style={props.Textcolor}>
        <h2 className="text-2xl  mb-2   xl:text-3xl mb-4"> {props.heading} </h2>
        <div className="mb-3 text-sm  md:text-lg xl:text-2xl">
          <textarea
            style={{
              background: props.mode === "light" ? "white" : "#d7c2c2",
              color: props.mode === "light" ? "black" : "#5a3d3d",
            }}
            onChange={changetext}
            className="form-control text-sm mb-2 md:text-lg cursor-pointer xl:text-2xl"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            placeholder="Write..."
          ></textarea>
          <p>
            {" "}
            {text.split(" ").length - 1} Words {text.length} Characters{" "}
          </p>
          <p className="mb-2   ">
            {0.008 * (text.split(" ").length - 1)} Read words time in min
          </p>
        </div>
        <div className="space-x-2   cursor-pointer    ">
          <button
            className="      rounded-2xl  text-xs  btn btn-primary ml-2  mb-2 md:text-lg px-3 xl:text-2xl hover:text-3xl"
            style={{
              background: props.mode === "dark" ? "#b9b0b0" : "#957ba9",
              borderColor: props.mode === "dark" ? "#b9b0b0" : "#e4e4f1",
            }}
            onClick={clickupper}
          >
            UpperCase{" "}
          </button>
          <button
            className="  rounded-2xl text-xs btn btn-primary  mb-2 md:text-lg px-3 xl:text-2xl hover:text-3xl"
            onClick={clicklower}
            style={{
              background: props.mode === "dark" ? "#b9b0b0" : "#957ba9",
              borderColor: props.mode === "dark" ? "#b9b0b0" : "#e4e4f1",
            }}
          >
            LowerCase{" "}
          </button>
          <button
            className="  rounded-2xl text-xs btn btn-primary  mb-2 md:text-lg px-3 xl:text-2xl hover:text-3xl"
            onClick={clickclear}
            style={{
              background: props.mode === "dark" ? "#b9b0b0" : "#957ba9",
              borderColor: props.mode === "dark" ? "#b9b0b0" : "#e4e4f1",
            }}
          >
            Clear{" "}
          </button>
          <button
            className="  rounded-2xl text-xs btn btn-primary mb-2 md:text-lg px-3 xl:text-2xl hover:text-3xl"
            onClick={clickcopy}
            style={{
              background: props.mode === "dark" ? "#b9b0b0" : "#957ba9",
              borderColor: props.mode === "dark" ? "#b9b0b0" : "#e4e4f1",
            }}
          >
            Copy{" "}
          </button>
          <button
            className="  rounded-2xl text-xs btn btn-primary mb-2 md:text-lg px-3 xl:text-2xl hover:text-3xl"
            onClick={clickpaste}
            style={{
              background: props.mode === "dark" ? "#b9b0b0" : "#957ba9",
              borderColor: props.mode === "dark" ? "#b9b0b0" : "#e4e4f1",
            }}
          >
            Paste
          </button>
          <button
            className="  rounded-2xl text-xs btn btn-primary mb-2 md:text-lg px-3 xl:text-2xl hover:text-3xl"
            onClick={link}
            style={{
              background: props.mode === "dark" ? "#b9b0b0" : "#957ba9",
              borderColor: props.mode === "dark" ? "#b9b0b0" : "#e4e4f1",
            }}
          >
            More..
          </button>
        </div>
        <div className="container my-4 text-xs md:text-sm xl:text-3xl">
          <h2 className="text-sm md:text-lg xl:text-2xl ">View Text</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
