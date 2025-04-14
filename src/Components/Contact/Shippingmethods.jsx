import React from 'react'
import { FaTruck } from "react-icons/fa";
import { SiFsecure } from "react-icons/si";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";

const Shippingmethods = () => {
    const obj = [
        { 
            icon: <FaTruck className='icon' />, 
            shipping:'free shipping',
            paragh:'Shopping made stress-free – our easy returns process ensures your satisfaction is our ultimate goal',
        
        },
        { 
            icon: <SiFsecure  className='icon' />, 
            shipping:'Secure Payments',
            paragh:'Experience worry-free transactions with our commitment to security, prioritizing the safety of your financial information',
        
        },
        { 
            icon: <MdOutlineSpatialTracking  className='icon' />, 
            shipping:'Order Tracking',
            paragh:'Stay in the know with our convenient order tracking, allowing you to follow every step of your purchase journey with ease',
        
        },
        { 
            icon: <GiReturnArrow  className='icon' />, 
            shipping:'Easy Returns',
            paragh:'Stay in the know with our convenient order tracking, allowing you to follow every step of your purchase journey with ease',
        
        }
    ]
  return (
    <div className='Shippingmethods'>
        {
            obj.map((elem,index)=>{
                return(
                    <div key={index} className="shippingcard">
                        {elem.icon} 
                        <h4>{elem.shipping}</h4>
                    <h5>{elem.paragh}
            
            </h5>
            
                    </div>
                )
            })
        }
     
      
    </div>
  )
}

export default Shippingmethods
