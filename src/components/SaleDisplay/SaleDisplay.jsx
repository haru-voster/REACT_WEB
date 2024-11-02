import React, { useContext } from "react";
import "./SaleDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import SaleItem from "../SaleItem/SaleItem";

const SaleDisplay = ({ category }) => {
  const { sale_list = [] } = useContext(StoreContext) || {}; // Default to an empty array

  return (
    <div className="sale-display" id="sale-display">
      <h2>BRAND NEW LAPTOPS</h2>
      <div className="sale-display-list">
        {sale_list.map((item, index) => (
          <SaleItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SaleDisplay;
