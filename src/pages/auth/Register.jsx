import React from "react";
import Header from "../../components/layout/Header";
import "./styles.scss";

const Register = () => {
  return (
    <div className="auth">
      <Header />
      <h4>Hello there!</h4>
      <h1>Create a new account</h1>
      <h4>
        Already registered? <a>Login</a>
      </h4>
      <form action="">
        <div className="name">
          <div className="input">
            <p>First name</p>
            <input type="text" placeholder="abc" />
          </div>

          <div className="input">
            <p>Last name</p>
            <input type="text" placeholder="xyz" />
          </div>
        </div>

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
          <button type="submit">Create Account</button>
        </div>
      </form>

      <div className="logo"></div>
    </div>
  );
};

export default Register;
