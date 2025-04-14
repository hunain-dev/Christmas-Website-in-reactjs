import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
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
   <Link to='/'> <FaFacebook /></Link>  
   <Link to='/'><CiInstagram /></Link> 
   <Link to='/'><FaTwitter/></Link>  
   <Link to='/'><FaYoutube /></Link>  



      </div>
    </div>
  )
}

export default Footer
