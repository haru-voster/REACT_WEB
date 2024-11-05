import React, { useContext } from 'react';
import "./Accessories.css";
import { StoreContext } from "../../context/StoreContext";
import SaleItem from "../SaleItem/SaleItem";

const Accessories = ({ category }) => {
  const { accessories_list = [] } = useContext(StoreContext) || {};
  return (
    <div className="accessories" id="accessories">
      <h2>ACCESSORIES</h2>
      <div className="accessories-list">
        {accessories_list.map((item, index) => (
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

export default Accessories;
