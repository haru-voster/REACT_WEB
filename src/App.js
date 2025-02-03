import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import SaleDisplay from './components/SaleDisplay/SaleDisplay';
import SaleItem from './components/SaleItem/SaleItem';
import { StoreProvider } from './context/StoreContext';
import Footer from './components/Footer/Footer';
import Appdownload from './components/Appdownload/Appdownload';
import LoginPop from "./components/LoginPop/LoginPop";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import MyOrders from './pages/MyOrders/MyOrders';

function App() {
  const [category, setCategory] = useState("All");
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
          <Route path='/verify' element={<verify/>}/>
          <Route path='/myorders' element={<MyOrders/>}/>
        </Routes>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <SaleDisplay />
        <SaleItem />
        
        <Appdownload/>
       
        <Footer /> {/* Ensure Footer is added here */}
        
      </div>
    </StoreProvider>
    </>
  );
}

export default App;
