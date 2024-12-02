import React from "react";
// import './css/loginsignup.css'
export default function Login() {
  return (
    <div className="LoginSignup">
      <div className="LoginSignup-container">
        <h1>login/signup</h1>

        <div className="LoginSignup-feilds">
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="your password" />
        </div>
        <button className="LoginSignup-button">continue</button>
        <div className="LoginSignup-login">
          <span>login here</span>
        </div>
      </div>
    </div>
  );
}
