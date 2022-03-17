import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../../components/layout/Header";
import "./styles.scss";
import axios from "axios";

const Login = () => {
  const passwrd = useRef(null);
  const show = useRef(null);
  const hide = useRef(null);

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    success: false,
  });
  const { email, password, error, loading, success } = values;

  //* To show and hide password
  const handlePassword = () => {
    if (passwrd.current.type === "text") {
      passwrd.current.type = "password";
      show.current.style.display = "none";
      hide.current.style.display = "";
    } else {
      passwrd.current.type = "text";
      show.current.style.display = "";
      hide.current.style.display = "none";
    }
  };

  //* Show other methods
  // const handleChangeMethods = () => {};

  //* Input field changes
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  //* Submit form to backend
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/login", values)
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setValues({ ...values, error: error.response.data.message });
      });
  };

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
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            onChange={handleChange("email")}
            value={email}
          />
          <div className="icons">
            <MdEmail />
          </div>
        </div>
        <div className="input">
          <p>Password</p>
          <input
            type="password"
            ref={passwrd}
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
            required
            onChange={handleChange("password")}
            value={password}
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
          <div className="btn">Change Method</div>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>

      <div className="logo"></div>
    </div>
  );
};

export default Login;
