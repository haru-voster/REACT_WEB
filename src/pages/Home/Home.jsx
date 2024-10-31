import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Navbar from '../../components/Navbar/Navbar'


const Home = () => {
  
  return (
    <div>
      <Header/>
      <Navbar/>
      <ExploreMenu />
    </div>
  )
}

export default Home
