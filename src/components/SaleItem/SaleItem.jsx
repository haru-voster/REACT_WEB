import React, { useContext } from "react";
import "./SaleItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const SaleItem = ({ id,name,price,description,image }) => {
  const {cartItems,addToCart,removeFromCart, url  } = useContext(StoreContext);

  // if (!addToCart || !removeFromCart) {
  //   // Return null or a loading message if context values are missing
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="sale-item">
      <div className="sale-item-img-container">
        <img className="sale-item-image" src={ url+"/image/"+image} alt="" />
        {
          !cartItems[id]
          ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon} alt=""/>
          : <div className="sale-item-counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon} alt=""/>
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon2} alt=""/>
            </div>
        }
      </div>
      <div className="sale-item-info">
        <div className="sale-item-name-rating">
          <p>{name}</p>
          <img src={assets.starts} alt="rating" />
        </div>
        <p className="sale-item-desc">{description}</p>
        <p className="sale-item-price">Kshs.{price}</p>
      </div>
    </div>
  );
}; 

export default SaleItem;
