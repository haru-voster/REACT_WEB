import React, { useContext } from 'react';
import "./Accessories.css";
import { StoreContext } from "../../context/StoreContext";
import SaleItem from "../SaleItem/SaleItem";

const Accessories = () => {
  const { accessories_list = [], addToCart } = useContext(StoreContext) || {};
  return (
    <div className="accessories" id="accessories">
      <h2>ACCESSORIES</h2>
      <div className="accessories-list">
        {accessories_list.map((item) => (
          <SaleItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            onAddToCart={() => addToCart(item._id, "accessories")} // Pass the correct category
          />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
