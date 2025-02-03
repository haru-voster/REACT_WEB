import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img className='' src={assets.header_img} alt=''/>
            <p> Place you order, we shall delivery instantly</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.whatsapp_icon} alt=''/>
                <img src={assets.linkedin_icon } alt=''/>
                <img src={assets.email_icon} alt=''/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2> GET IN TOUCH</h2>
            <ul>
                <li>+254 708466793</li>
                <li>harounbravo2@gmail.com</li>
            </ul>

        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>copyright 2025 Computer.com - All Right Reserved.</p>

    </div>
  )
}

export default Footer
