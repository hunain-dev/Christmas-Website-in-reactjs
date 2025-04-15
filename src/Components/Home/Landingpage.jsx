import React from 'react';
import Button from './Button/Button';
import { Link } from 'react-router-dom';
const Landingpage = ({ name }) => {
  return (
    <div className='Landingpage'>
      <div className="landinginnertext">
        <div className="landinginnertexttop">
          <h2>{name.expericne || name.ChristmasGiftsname || name.Aboutuswords || name.gettouch }</h2>  
        </div>
        <div className="landinginnertextbottom">
          <h2>{name.festival || name.holiday || name.Shopexpereince  || name.Aboutuskeys || name.getcontact }</h2> 
        </div>
        <div className="landinginnertextend">
          <h5>{name.ehancemoment || ''}</h5> 
         <Link to='/Shop' ><Button /></Link>  

        
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
