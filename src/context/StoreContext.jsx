import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext({
  // sale_list: [],
  // accessories_list: [],
  // cartItems: [],
});

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems,  accessories_list] = useState({});
  
  const url = "http://local:host4000";
  const [token, setToken] = useState("");
  const [sale_list, setSaleList] = useState([])
  // Helper function to get the correct item list based on the selected category
  

  const addToCart = async (itemId) => {
    if(!cartItems[itemId]){
      setCartItems((prev) =>({...prev, [itemId]:1}))
      }
      else{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
      }
      if(token){
        await axios.post(url+"/api/cart/add", {itemId},{headers:{token}})
      }
    }    
  const removeFromCart =  async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(url+"/api/cart/remove", {itemId},{headers:{token}})

    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        
       let itemInfo = sale_list.find((product) => product._id === itemId);
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
      return totalAmount;
    }
   
  

  // const setCategory = (category) => {
  //   setSelectedCategory(category);
  // };
  const fetchSaleList =  async()=>{
    const response = await axios.get(url+"/api/sale/list");
    setSaleList(response.data.data)

  } 

  const loadCartData = async (token) =>{
    const response = await axios.post(url+"/api/cart/get",{}, {headers:{token}})
    setCartItems(response.data.cartData);
  }
  useEffect(()=>{
   
    async function loadData(){ 
      await fetchSaleList()
      if (localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData()
  }, )

  const contextValue = {
    sale_list,
    cartItems,
    addToCart,
    loadCartData,
    removeFromCart,
    getTotalCartAmount,
    accessories_list,
    // selectedCategory,
    // setCategory,
    url,
    token,
    setToken
    
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
