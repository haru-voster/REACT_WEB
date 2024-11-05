import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import SaleDisplay from './components/SaleDisplay/SaleDisplay';
import SaleItem from './components/SaleItem/SaleItem';
import { StoreProvider } from './context/StoreContext';
<<<<<<< HEAD
import Footer from './components/Footer/Footer';
import Appdownload from './components/Appdownload/Appdownload';
import LoginPop from "./components/LoginPop/LoginPop";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Accessories from './components/Accessories/Accessories';
=======
>>>>>>> 929701bb3a72e57b3b4184b4fadf973f14a816e2


function App() {
  const [category, setCategory] = useState("All");
<<<<<<< HEAD
  const [showLogin, setShowLogin] = useState(false)
  return (<>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
  
<StoreProvider>
    <div className="App">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <SaleDisplay />
        <SaleItem />
        <Accessories/>
        <Appdownload/>
       
        <Footer /> {/* Ensure Footer is added here */}
        
      </div>
    </StoreProvider>
    </>
=======
  return (
  <StoreProvider>
    <div className="App">
      <Navbar/>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <SaleDisplay/>
      <SaleItem/>
        
    </div>
    </StoreProvider>
   
>>>>>>> 929701bb3a72e57b3b4184b4fadf973f14a816e2
  );
}

export default App;
