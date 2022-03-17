import React from "react";

function Password() {
  return (
    <div className="auth">
      <div className="center">
        <div className="name">
          <div className="input">
            <p>Email</p>
            <input type="text" placeholder="abc" />
          </div>

          <div className="actions">
            <button>send otp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
