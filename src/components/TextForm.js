import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowerClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClear = () => {
        setText("");
    }
    const[text, setText] = useState("");
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mytext" value={text} onChange={handleOnChange} rows="10" placeholder="Enter text here"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handleClear}>clear Text</button>
    </div>
    <div className="my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p> {0.008 * text.split(" ").length} Minutes read</p>
        <h3>preview</h3>
        <p>{text}</p>
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
