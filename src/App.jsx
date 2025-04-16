import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Aboutus from './Components/About/Aboutus'
import Shop from './Components/Shop/Shop'
import Contact from './Components/Contact/Contact'
import LocomotiveScroll from 'locomotive-scroll';
import Shopdetails from './Components/Shopdetails/Shopdetails'
import Cart from './Navbar/Cart/Cart'

const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='main'>
          
      <Routes>
        <Route path='/Cart' element={<Cart/>}  />
        <Route path='/' element={<Home/>}  />
        <Route path='/Shop' element={<Shop/>}  />
      <Route path='/Shop/productdetails/:id' element={<Shopdetails/>} />
        <Route path='/Aboutus' element={<Aboutus/>}  />
        <Route path='/Contact' element={<Contact/>}  />
      </Routes>
    </div>
  )
}

export default App;
