// StoreContext.js
import { createContext } from "react";
import { sale_list } from "../assets/assets"; // Adjust to the correct path

export const StoreContext = createContext({ sale_list: [] });

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={{ sale_list }}>
    {children}
  </StoreContext.Provider>
);
