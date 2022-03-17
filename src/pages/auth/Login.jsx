import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../../components/layout/Header";
import "./styles.scss";

const Login = () => {
  const password = useRef(null);
  const show = useRef(null);
  const hide = useRef(null);

  //* To show and hide password
  const handlePassword = () => {
    if (password.current.type === "text") {
      password.current.type = "password";
      show.current.style.display = "none";
      hide.current.style.display = "";
    } else {
      password.current.type = "text";
      show.current.style.display = "";
      hide.current.style.display = "none";
    }
  };

  //* Show other methods
  const handleChangeMethods = () => {};

  return (
    <div className="auth">
      <Header />
      <h4>Welcome Back!</h4>
      <h1>Login into your account</h1>
      <h4>
        Not yet registered? <Link to="/register">Register</Link>
      </h4>
      <form action="">
        <div className="input">
          <p>Email</p>
          <input type="email" placeholder="example@gmail.com" />
          <div className="icons">
            <MdEmail />
          </div>
        </div>
        <div className="input">
          <p>Password</p>
          <input
            type="password"
            ref={password}
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          />
          <div className="icons" onClick={handlePassword}>
            <span ref={show} style={{ display: "none" }}>
              <FaEye />
            </span>
            <span ref={hide}>
              <FaEyeSlash />
            </span>
          </div>
        </div>
        <div className="actions">
          <div className="btn" onClick={handleChangeMethods}>
            Change Method
          </div>
          <button type="submit">Login</button>
        </div>
      </form>

      <div className="logo"></div>
    </div>
  );
};

export default Login;
