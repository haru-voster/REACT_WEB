import { createContext, useState } from "react";
import { sale_list, accessories_list } from "../assets/assets"; // Adjust to the correct path

export const StoreContext = createContext({ sale_list: [] });

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("sale");

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const itemList = selectedCategory === "sale" ? sale_list : accessories_list;
      const itemInfo = itemList.find((product) => product._id === itemId);
      if (itemInfo) {
        return {
          ...prev,
          [itemId]: (prev[itemId] || 0) + 1,
        };
      }
      return prev; // Return previous state if item not found
    });
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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemList = sale_list.find((product) => product._id === item) || accessories_list.find((product) => product._id === item);
        if (itemList) {
          totalAmount += itemList.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const contextValue = {
    sale_list,
    accessories_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    selectedCategory,
    setCategory,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
