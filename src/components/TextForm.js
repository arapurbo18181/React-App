import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    if (text.length > 0 && typeof text === String) {
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("converted to Uppercase", "success");
    } else{
      props.showAlert("Please enter text first", "warning");
    }
  };
  const handleLowerClick = () => {
    if (text.length > 0 && typeof text === String) {
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("converted to Lowercase", "success");
    } else {
      props.showAlert("Please enter text first", "warning");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.modes === "dark" ? "white" : "black" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mytext"
            value={text}
            onChange={handleOnChange}
            rows="10"
            placeholder="Enter text here"
            style={{
              color: props.modes === "dark" ? "white" : "black",
              backgroundColor: props.modes === "dark" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn text-${props.modes} bg-${
            props.modes === "dark" ? "white" : "black"
          } mx-3 my-3`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn text-${props.modes} bg-${
            props.modes === "dark" ? "white" : "black"
          } mx-3 my-3`}
          onClick={handleLowerClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn text-${props.modes} bg-${
            props.modes === "dark" ? "white" : "black"
          } mx-3 my-3`}
          onClick={handleClear}
        >
          Clear Text
        </button>
      </div>
      <div
        className="my-3"
        style={{ color: props.modes === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element) => element.length !== 0).length}{" "}
          Words and {text.length} Characters
        </p>
        <p> {0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
        <hr />
        <h3>preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "set your heading here",
};
