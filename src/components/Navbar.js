import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-${props.modes} navbar-expand-lg bg-${props.modes}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                {props.about}
              </a>
            </li>
          </ul>
          <button
            className="btn text-white bg-dark"
            type="submit"
            onClick={props.togglemode1}
            style={props.mystyle1}
          >
            Enable Dark mode
          </button>
          <button
            className="btn text-dark bg-light"
            type="submit"
            onClick={props.togglemode2}
            style={props.mystyle2}
          >
            Enable Light mode
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  modes: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title here",
  about: "set about here",
  modes: "set mode",
};
