import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import { useState } from 'react';
import SaleDisplay from './components/SaleDisplay/SaleDisplay';

function App() {
  const [category, setCategory] = useState("All");
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <SaleDisplay category = {category}/>
      
    </div>
  );
}
export default App
