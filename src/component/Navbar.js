import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav
      className={`bg-#957ba9   align-middle navbar navbar-expand-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid my-2 ">
        <a
          className="navbar-brand text-sm font-semibold font-sans md:text-2xl text-opacity-100  xl:text-3xl    "
          style={props.Textcolor}
          href="#"
        >
          {props.title}
        </a>
        <div
          className={`mx-0   form-check form-switch flex `}
          style={props.Textcolor}
        >
          <input
            className=" text-sm  form-check-input md:text-lg xl:text-2xl hover:text-3xl mr-3"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.modefun}
          />
          <label
            className="text-sm   form-check-label mx-2 md:text-lg xl:text-2xl"
            htmlFor="flexSwitchCheckDefault"
          >
            {props.modeText}
          </label>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  About: PropTypes.string,
};
