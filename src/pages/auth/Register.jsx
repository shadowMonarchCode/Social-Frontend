import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../../components/layout/Header";
import "./styles.scss";
import axios from "axios";

const Register = () => {
  const passwrd = useRef(null);
  const show = useRef(null);
  const hide = useRef(null);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    success: false,
  });
  const { firstName, lastName, email, password, error, loading, success } =
    values;

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
  const onChange = (field) => (event) => {
    setValues({ ...values, [field]: event.target.value });
  };

  //* Submit form to backend
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/register", values)
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.error.msg);
        setValues({ ...values, error: error.response.data.error.msg });
      });
  };

  return (
    <div className="auth">
      <Header />
      <h4>Hello there!</h4>
      <h1>Create a new account</h1>
      <h4>
        Already registered? <Link to="/login">Login</Link>
      </h4>
      <form action="">
        <div className="name">
          <div className="input">
            <p>First name</p>
            <input
              type="text"
              placeholder="abc"
              required
              value={firstName}
              onChange={onChange("firstName")}
            />
          </div>
          <div className="input">
            <p>Last name</p>
            <input
              type="text"
              placeholder="xyz"
              required
              value={lastName}
              onChange={onChange("lastName")}
            />
          </div>
        </div>
        <div className="input">
          <p>Email</p>
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            value={email}
            onChange={onChange("email")}
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
            value={password}
            onChange={onChange("password")}
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
            Sign Up
          </button>
        </div>
      </form>
      <div className="logo"></div>
    </div>
  );
};

export default Register;
