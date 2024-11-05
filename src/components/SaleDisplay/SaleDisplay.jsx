import React, { useContext } from "react";
import "./SaleDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import SaleItem from "../SaleItem/SaleItem";

const SaleDisplay = () => {
  const { sale_list = [], addToCart } = useContext(StoreContext) || {};

  return (
    <div className="sale-display" id="sale-display">
      <h2>BRAND NEW LAPTOPS</h2>
      <div className="sale-display-list">
        {sale_list.map((item) => (
          <SaleItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            onAddToCart={() => addToCart(item._id, "sale")}
          />
        ))}
      </div>
    </div>
  );
};

export default SaleDisplay;
