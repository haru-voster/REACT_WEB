import React, { useContext } from "react";
import "./SaleDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import SaleItem from "../SaleItem/SaleItem";

const SaleDisplay = ({category}) => {
  const { sale_list = [] } = useContext(StoreContext) || {}; // Fallback empty array for sale_list

  return (
    <div>
      {sale_list.map((sale) => (
        <SaleItem
          key={sale.id}
          id={sale._id}
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