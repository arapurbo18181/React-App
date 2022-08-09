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
    const[text, setText] = useState("");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mytext" value={text} onChange={handleOnChange} rows="10" placeholder="Enter text here"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to Uppercase</button>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "set your heading here",
};
