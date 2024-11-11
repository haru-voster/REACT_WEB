import { createContext, useState } from "react";
import { sale_list, accessories_list } from "../assets/assets"; // Adjust to the correct path

export const StoreContext = createContext({
  sale_list: [],
  accessories_list: [],
  cartItems: {},
});

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("sale");

  // Helper function to get the correct item list based on the selected category
  const getItemList = () => (selectedCategory === "sale" ? sale_list : accessories_list);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const itemList = getItemList();
      const itemInfo = itemList.find((product) => product._id === itemId);
      if (itemInfo) {
        return {
          ...prev,
          [itemId]: (prev[itemId] || 0) + 1,
        };
      }
      return prev;
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
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemList = sale_list.concat(accessories_list);
        const itemInfo = itemList.find((product) => product._id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
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
