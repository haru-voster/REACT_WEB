import React, { useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets";

const LoginPop = ({setShowLogin}) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-pop">
      <form className="login-pop-container">
        <div className="login-pop-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""/>
        </div>
        <div className="login-pop-inputs">
            {currentState==="Login"?<></>:<input type="text" placeholder="Your Name" required />}
          
          <input type="email" placeholder="Your Email" required />
          <input type="phone_number" placeholder="Your Contact" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-pop-condition">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms and privacy of the company.</p>
        </div>
        {currentState==="login"
        ?<p> Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
        : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
        }
      </form>
    </div>
  );
};

export default LoginPop;
