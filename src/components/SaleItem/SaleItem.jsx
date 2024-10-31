import React from "react";
import "./SaleItem.css";
import { assets } from "../../assets/assets"; // Ensure assets.starts exists

const SaleItem = ({ id, name, price, description, image }) => {
  return (
    <div className="sale-item">
      <div className="sale-item-img-container">
        <img className="sale-item-image" src={image} alt="" />
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