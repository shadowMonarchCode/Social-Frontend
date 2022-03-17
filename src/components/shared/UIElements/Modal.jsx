import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

import "./styles.scss";
// import { CSSTransition } from "react-transition-group";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`content ${props.contentClass}`}>{props.children}</div>
        <footer className={`footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-root"));
};

const Modal = (props) => {
  return (
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}

      {/* <CSSTransition
        in={props.show}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={"modal"}
      > */}
      {props.show && <ModalOverlay {...props} />}
      {/* </CSSTransition> */}
    </Fragment>
  );
};

export default Modal;
