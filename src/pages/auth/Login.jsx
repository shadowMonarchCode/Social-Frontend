import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import "./styles.scss";

const Login = () => {
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
        </div>
        <div className="input">
          <p>Password</p>
          <input
            type="password"
            placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
          />
        </div>
        <div className="actions">
          <button>Change Method</button>
          <button type="submit">Login</button>
        </div>
      </form>

      <div className="logo"></div>
    </div>
  );
};

export default Login;
