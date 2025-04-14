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
        <h4>Christmas gift</h4>
      </div>
      <div className="center">
      <Link to='/Home'><h3>Home</h3></Link> 
      <Link to='/Shop'><h3>Shop</h3></Link> 
      <Link to='/Aboutus'><h3>About us</h3></Link> 
      <Link to='/Contact'><h3>Contact</h3></Link> 
      </div>
      <div className="right">
   <Link to='/Home'> <FaFacebook /></Link>  
   <Link to='/Home'><CiInstagram /></Link> 
   <Link to='/Home'><FaTwitter/></Link>  
   <Link to='/Home'><FaYoutube /></Link>  



      </div>
    </div>
  )
}

export default Footer
