import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("HOME");
  const {getTotalCartAmount, token, setToken} = useContext(StoreContext)
  
  const navigate = useNavigate();
  const logout= ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    
  }
  

  return (
    <div className='navbar'>
      <img src={assets} alt="" className='lenovo1'/>
      <ul className='navbar-menu'>
      <Link to='/' onClick={()=>setMenu("HOME")} className={menu==="HOME"?"active":""}>HOME</Link>
      <a href='#explore-menu' onClick={()=>setMenu("ABOUT")} className={menu==="ABOUT"?"active":""}>MENU</a>
      <a href='#sale-display' onClick={()=>setMenu("LAPTOPS")} className={menu==="LAPTOPS"?"active":""}>LAPTOPS</a>
      <a href='#sale-display' onClick={()=>setMenu("ACCESSORIES")} className={menu==="ACCESSORIES"?"active":""}>ACCESSORIES</a>
      <a href='#footer' onClick={()=>setMenu("CONTACT")} className={menu==="CONTACT"?"active":""}>CONTACT</a>
    </ul>
    <div className='navbar-right'>
      <img src={assets.search_icon}alt=''className='search'/>
      <div className='navbar-search-icon'>
        <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}>
        </div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>SIGN IN</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt=''/>
          <ul className='nav-profile-dropdown'>
            <li><img src={assets.profile_icon} alt=''/><p>Order</p></li>
            <hr/>
            <li onClick={logout}><img src={assets.add_icon} alt=''/><p>Logout</p></li>
            <hr/>
          </ul>

          
          </div>}
      
    </div>
    </div>
    
  )
}

export default Navbar