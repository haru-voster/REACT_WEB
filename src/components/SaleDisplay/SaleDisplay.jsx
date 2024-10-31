//import React, { useContext } from "react";
import "./SaleDisplay.css";
//import { StoreContext } from "../../context/StoreContext";
//import SaleItem from "../SaleItem/SaleItem";
///   {sale_list.map((item, index) =>{
 // return <SaleItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          
//})}


const SaleDisplay = ({category}) => {
 // const { sale_list} = useContext(StoreContext) // Fallback empty array for sale_list

  return (
    <div className="sale-display" id="sale-display">
      <h2>Top Featuring </h2>
      <div className="sale-display-list">
       
 
      </div>
      
    </div>
  );
};

export default SaleDisplay;