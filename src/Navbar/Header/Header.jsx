import React, { useContext } from 'react'
import { IoIosCart } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <div className="left">
        <Link to='/'><h4>Christmas gift</h4></Link> 
      </div>
      <div className="center">
        <Link to='/'><h3>Home</h3></Link>  
        <Link to='/Shop'><h3>Shop</h3></Link>  
        <Link to='/Aboutus'><h3>About us</h3></Link>  
        <Link to='/Contact'><h3>Contact</h3></Link>  
      </div>
      <div className="right">
      <Link to='/Cart'><IoIosCart /></Link> 
      </div>
    </div>
  )
}

export default Header;
