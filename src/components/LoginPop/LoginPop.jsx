import React, { useContext, useState } from "react";
import "./LoginPop.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'

const LoginPop = ({setShowLogin}) => {
const {url, setToken} = useContext(StoreContext)

  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name:"",
    email:"",
    phone:"",
    password:""

  })
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))

  }
  //useEffect(()=>{
  //  console.log(data);
  //}, [data])

  //use url

  const onLogin = async(event)=>{
    event.preventDefault()
    let newUrl = url;
    if(currentState==="Login"){
      newUrl += "/api/user/login"
    }else{
      newUrl += "/api/user/register" 
    }
    
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    
  }
  return (
    <div className="login-pop">
      <form onSubmit={onLogin} className="login-pop-container">
        <div className="login-pop-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""/>
        </div>
        <div className="login-pop-inputs">
            {currentState==="Login"?<></>:<input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your Name" required />}
          
          <input name= "email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your Email" required />
          <input name='phone' onChange={onChangeHandler} value={data.phone} type="phone_number" placeholder="Phone Number" required />
          <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
        </div>   
        <button type="submit">{currentState==="Sign Up"?"Create account":"Login"}</button>
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
//