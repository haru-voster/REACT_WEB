import React, { useContext } from "react";
import "./SaleDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import SaleItem from "../SaleItem/SaleItem";

const SaleDisplay = () => {
  const { sale_list = [] } = useContext(StoreContext) || {}; // Fallback empty array for sale_list

  return (
    <div>
      {sale_list.map((sale) => (
        <SaleItem
          key={sale.id}
          id={sale.id}
          name={sale.name}
          price={sale.price}
          description={sale.description}
          image={sale.image}
        />
      ))}
    </div>
  );
};

export default SaleDisplay;