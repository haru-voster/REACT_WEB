import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import SaleDisplay from './components/SaleDisplay/SaleDisplay';
import SaleItem from './components/SaleItem/SaleItem';

function App() {
  const [category, setCategory] = useState("All");
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <SaleDisplay category = {category}/>
      <SaleItem/>
    </div>
  );
}
export default App
