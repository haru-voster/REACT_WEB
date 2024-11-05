import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, sale_list, accessories_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  // Helper function to render cart items from any list
  const renderCartItems = (itemList) => {
    return itemList.map((item) => {
      if (cartItems[item._id] > 0) {
        return (
          <div key={item._id}>
            <div className="cart-items-title cart-items-items">
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>
                Kshs.{" "}
                {Number(item.price).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p>{cartItems[item._id]}</p>
              <p>
                Kshs.{" "}
                {(item.price * cartItems[item._id]).toLocaleString(
                  undefined,
                  { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                )}
              </p>
              <p onClick={() => removeFromCart(item._id)} className="close">
                x
              </p>
            </div>
            <hr />
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/* Render items from sale_list */}
        {renderCartItems(sale_list)}
        {/* Render items from accessories_list */}
        {renderCartItems(accessories_list)}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Kshs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Kshs.{getTotalCartAmount() === 0 ? 0 : 200.00}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>Kshs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 200.00}</p>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
