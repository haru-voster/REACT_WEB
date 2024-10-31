import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu,setMenu] = useState("HOME");
    return (
    <div className='navbar'>
      <img src={assets} alt="" className='lenovo1'/>
      <ul className='navbar-menu'>
      <li onClick={()=>setMenu("HOME")} className={menu==="HOME"?"active":""}>HOME</li>
      <li onClick={()=>setMenu("ABOUT")} className={menu==="ABOUT"?"active":""}>ABOUT</li>
      <li onClick={()=>setMenu("STORE")} className={menu==="STORE"?"active":""}>STORE</li>
      <li onClick={()=>setMenu("CONTACT")} className={menu==="CONTACT"?"active":""}>CONTACT</li>
    </ul>
    <div className='navbar-right'>
      <img src={assets.search_icon}alt=''className='search'/>
      <div className='navbar-search-icon'>
        <img src={assets.basket_icon} alt=''/>
        <div className='dot'>
        </div>
      </div>
      <button>SIGN IN</button>
    </div>
    </div>
    
  )
}

export default Navbar