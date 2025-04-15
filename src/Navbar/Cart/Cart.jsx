import React, { useContext } from 'react';
import Landingpage from '../../Components/Home/Landingpage';
import { CartContext } from './Cartcontext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const productname = ['Product', 'Price', 'Quantity', 'total'];

  // 👉 Calculate total
  const totalAmount = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.h4.replace('$', ''));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="Cart">
      <Landingpage name={{ Shopexpereince: 'Cart' }} />

      <div className="develreditem">
        <div className="develreditemleft">
          {/* Top Headings */}
          <div className="develreditemlefttop">
            {productname.map((elem, index) => (
              <div key={index}>
                <h3>{elem}</h3>
              </div>
            ))}
          </div>

          {/* Cart Items */}
          <div className="develreditemleftbottom">
            {cartItems.map((item, index) => (
              <div className="cartrow" key={index}>
                <div className="develreditemimage">
                  <img src={item.img} alt={item.h3} />
                </div>
                <p>{item.h4}</p>
                <p>{item.quantity}</p>
                <p>
                  $
                  {(parseFloat(item.h4.replace('$', '')) * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Cart Total */}
        <div className="develreditemright">
          <h1>Cart Total</h1>

          {cartItems.map((item, index) => (
            <div className="totalprice" key={index}>
              <p>{item.h3}</p>
              <p>
                Subtotal: $
                {(parseFloat(item.h4.replace('$', '')) * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <hr />
          <h3>Grand Total: ${totalAmount.toFixed(2)}</h3>
          <Link to="/Shop">
  <button className="checkoutbtn">Go and shop again</button>
</Link>        </div>
      </div>
    </div>
  );
};

export default Cart;
