import React from 'react'
import Landingpage from '../Home/Landingpage'
import Shopscards from './shopscards';
const Shop = () => {
  const Shop = {
    Shopexpereince: 'Shop',
  };

  return (
    <div>
      <Landingpage name={Shop}/>
      <Shopscards />
    </div>
  )
}

export default Shop
