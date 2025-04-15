import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const Cartcontext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    const itemWithQty = { ...product, quantity };
    setCartItems((prev) => [...prev, itemWithQty]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cartcontext;
