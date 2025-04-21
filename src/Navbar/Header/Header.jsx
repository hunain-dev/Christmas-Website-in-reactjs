import React, { useContext, useEffect, useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoIosCart } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [Closemenu, setClosemenu] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState); 
  };

  const Closebtn = () => {
    setClosemenu(prevState => !prevState); 
    setMenuOpen(false);
  };
 useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]); 

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
        <Link to='/Cart'><IoIosCart className='Carticon' /></Link>
        <div onClick={toggleMenu}>
          <IoIosMenu className='Menuicon' />
        </div>
      </div>

      {menuOpen && (
        <div className='sidebar'>
          <h1><Link to='/'>Home</Link></h1>
         <h1><Link to='/Shop'>Shop</Link></h1>
 <h1><Link to='/Aboutus'>About Us</Link></h1>
         <h1><Link to='/Contact'>Contact</Link></h1> 
             
        <div className='Closemenu' onClick={Closebtn}> <IoMdClose /></div> 
   
         
        </div>
      )}
    </div>
  );
};

export default Header;