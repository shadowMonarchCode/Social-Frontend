import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-root")
  );
};

export default Backdrop;
