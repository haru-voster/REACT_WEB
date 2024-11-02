import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import SaleDisplay from './components/SaleDisplay/SaleDisplay';
import SaleItem from './components/SaleItem/SaleItem';
import { StoreProvider } from './context/StoreContext';


function App() {
  const [category, setCategory] = useState("All");
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
   
  );
}
export default App
