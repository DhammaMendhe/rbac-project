import React from 'react'
// import './css/loginsignup.css'
export default function Signup() {
  return (

    <div  className='LoginSignup'>
      <div className="LoginSignup-container">
        <h1>login/signup</h1>
      
      <div className="LoginSignup-feilds">
        <input type="text" placeholder='your name'/>
        <input type="email" placeholder='your email'/>
        <input type="password" placeholder='your password'/>
      </div>
      <button className='LoginSignup-button'>continue</button>
      <div className="LoginSignup-login">Already have an account ? <span>login here</span></div>
      <div className="LoginSignup-agree">
        <input type="checkbox" id=''/>
        <p>by continuing, i agree to terms and privacy and policy </p>
      </div>
      </div>



    </div>
  )
}