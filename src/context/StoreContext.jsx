// StoreContext.js
import { createContext, useState, useEffect } from "react";
import { sale_list } from "../assets/assets"; // Adjust to the correct path

export const StoreContext = createContext({ sale_list: [] });

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] <= 1) {
        const updatedItems = { ...prev };
        delete updatedItems[itemId];
        return updatedItems;
      } else {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
    });
  };

 // useEffect(() => {
  //  console.log(cartItems); // For debugging purposes
  //}, [cartItems]);
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
      if (cartItems[item] > 0){
        let itemInfo = sale_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const contextValue = {
    sale_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
