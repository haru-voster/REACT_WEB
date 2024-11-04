import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-oder-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last Name'/>
        </div>
        <input type='email' placeholder='Email Address'/>
        <input type='text' placeholder='street'/>
        <div className='multi-fields'>
          <input type='text' placeholder='City'/>
          <input type='text' placeholder='State'/>
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code'/>
          <input type='text' placeholder='Country'/>
        </div>

      </div>
      <input type='text' placeholder='Phone Number'/>
      <div className='place-order-right'>
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Kshs.{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Kshs.{200.00}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>Kshs.{getTotalCartAmount()+200.00}</p>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
