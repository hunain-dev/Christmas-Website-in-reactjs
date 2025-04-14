import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';

const Shopdetails = () => {

  const [itemincrement, setitemdecrement] = useState(0);


  const increment = () => {
    setitemdecrement(itemincrement + 1);
  }

  const descremnt = () => {
    if (itemincrement > 1) {
      setitemdecrement(itemincrement - 1);

    } else {
      console.log('error found')
    }
  }

  const paramdata = useParams();

  
  const obj = [
    {
        img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-018-400x600.jpg',
        h3:'Candy cane lane delights',
        h4:'$ 67.00',
        productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
        cartbtn:'Add to cart',
        costumes:'Pet & People costumes',

        shippingrules:{
          firstrule:'Free shipping on orders over $50!',
          secondrule:'No-Risk Money Back Guarantee!',
          thirdrule:'No Hassle Refunds',
          fourthrule:'Secure Payments',
        },
        
        checkoutmethod:{
          text:'Guaranteed Safe Checkout',
          paymentmethodimg:'/public/assets/images/paymentmethod.png'

        }

    },  
   
{

        img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-014-400x600.jpg',
        h3:'Christmas holiday around',
        h4:'$ 70.00',
        productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
        cartbtn:'Add to cart',
        costumes:'Pet & People costumes',

        shippingrules:{
          firstrule:'Free shipping on orders over $50!',
          secondrule:'No-Risk Money Back Guarantee!',
          thirdrule:'No Hassle Refunds',
          fourthrule:'Secure Payments',
        },
        
        checkoutmethod:{
          text:'Guaranteed Safe Checkout',
          paymentmethodimg:'/public/assets/images/paymentmethod.png'

        }



},

{

        img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-013-400x600.jpg',
        h3:'Christmas human harmony',
        h4:'$ 45.00',
        productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
        cartbtn:'Add to cart',
        costumes:'Pet & People costumes',

        shippingrules:{
          firstrule:'Free shipping on orders over $50!',
          secondrule:'No-Risk Money Back Guarantee!',
          thirdrule:'No Hassle Refunds',
          fourthrule:'Secure Payments',
        },
        
        checkoutmethod:{
          text:'Guaranteed Safe Checkout',
          paymentmethodimg:'/public/assets/images/paymentmethod.png'

        }
 

},

{

        img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-012-400x600.jpg',
        h3:'tree collection',
        h4:'$ 37.00',
        productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
        cartbtn:'Add to cart',
        costumes:'Pet & People costumes',

        shippingrules:{
          firstrule:'Free shipping on orders over $50!',
          secondrule:'No-Risk Money Back Guarantee!',
          thirdrule:'No Hassle Refunds',
          fourthrule:'Secure Payments',
        },
        
        checkoutmethod:{
          text:'Guaranteed Safe Checkout',
          paymentmethodimg:'/public/assets/images/paymentmethod.png'

        }


},

{
      img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-07-400x600.jpg',
      h3:'Festive Family Fashion: Pet Edition',
      h4:'$ 21.00',
      productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
      cartbtn:'Add to cart',
      costumes:'Pet & People costumes',

      shippingrules:{
        firstrule:'Free shipping on orders over $50!',
        secondrule:'No-Risk Money Back Guarantee!',
        thirdrule:'No Hassle Refunds',
        fourthrule:'Secure Payments',
      },
      
      checkoutmethod:{
        text:'Guaranteed Safe Checkout',
        paymentmethodimg:'/public/assets/images/paymentmethod.png'

      }

},

{
    img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-017-400x600.jpg',
    h3:'Fireside Elegance Ensemble',
    h4:'$ 70.00',
    productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
    cartbtn:'Add to cart',
    costumes:'Pet & People costumes',

    shippingrules:{
      firstrule:'Free shipping on orders over $50!',
      secondrule:'No-Risk Money Back Guarantee!',
      thirdrule:'No Hassle Refunds',
      fourthrule:'Secure Payments',
    },
    
    checkoutmethod:{
      text:'Guaranteed Safe Checkout',
      paymentmethodimg:'/public/assets/images/paymentmethod.png'

    }


},  

{
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-010-400x600.jpg',
  h3:'Fur & Festivity Fashion Parade',
  h4:'$ 90.00',
  productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
  cartbtn:'Add to cart',
  costumes:'Pet & People costumes',

  shippingrules:{
    firstrule:'Free shipping on orders over $50!',
    secondrule:'No-Risk Money Back Guarantee!',
    thirdrule:'No Hassle Refunds',
    fourthrule:'Secure Payments',
  },
  
  checkoutmethod:{
    text:'Guaranteed Safe Checkout',
    paymentmethodimg:'/public/assets/images/paymentmethod.png'

  }


},  
 
{
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-016-400x600.jpg',
  h3:'Golden Glow Festivities',
  h4:'$ 10.00',
  productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
  cartbtn:'Add to cart',
  costumes:'Pet & People costumes',

  shippingrules:{
    firstrule:'Free shipping on orders over $50!',
    secondrule:'No-Risk Money Back Guarantee!',
    thirdrule:'No Hassle Refunds',
    fourthrule:'Secure Payments',
  },
  
  checkoutmethod:{
    text:'Guaranteed Safe Checkout',
    paymentmethodimg:'/public/assets/images/paymentmethod.png'

  }


},  

{

  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-01-400x600.jpg',
  h3:'Holiday Elegance Mug',
  h4:'$ 65.00',
  productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
  cartbtn:'Add to cart',
  costumes:'Pet & People costumes',

  shippingrules:{
    firstrule:'Free shipping on orders over $50!',
    secondrule:'No-Risk Money Back Guarantee!',
    thirdrule:'No Hassle Refunds',
    fourthrule:'Secure Payments',
  },
  
  checkoutmethod:{
    text:'Guaranteed Safe Checkout',
    paymentmethodimg:'/public/assets/images/paymentmethod.png'

  }


},  

{

  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-09-400x600.jpg',
  h3:'Holiday Hound & Human Harmony',
  h4:'$ 77.00',
  productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
  cartbtn:'Add to cart',
  costumes:'Pet & People costumes',

  shippingrules:{
    firstrule:'Free shipping on orders over $50!',
    secondrule:'No-Risk Money Back Guarantee!',
    thirdrule:'No Hassle Refunds',
    fourthrule:'Secure Payments',
  },
  
  checkoutmethod:{
    text:'Guaranteed Safe Checkout',
    paymentmethodimg:'/public/assets/images/paymentmethod.png'

  }


},  

{ 

  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-04-400x600.jpg',
  h3:'Jingle All the Way Mug',
  h4:'$ 45.00',
  productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
  cartbtn:'Add to cart',
  costumes:'Pet & People costumes',

  shippingrules:{
    firstrule:'Free shipping on orders over $50!',
    secondrule:'No-Risk Money Back Guarantee!',
    thirdrule:'No Hassle Refunds',
    fourthrule:'Secure Payments',
  },
  
  checkoutmethod:{
    text:'Guaranteed Safe Checkout',
    paymentmethodimg:'/public/assets/images/paymentmethod.png'

  }


},

{
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-02-400x600.jpg',
  h3:'Merry Memories Photo Mug',
  h4:'94.00',
  productDescription:'From Santa’s Sidekicks to Twinkle Paws & Tinsel Tots, our carefully curated ensembles bring joy to every member of the family—both two-legged and four-legged. Elevate your family photos with coordinated outfits that capture the spirit of the season. Unleash the fun with North Pole Pals and transform your pets into winter wonderland characters.',
  cartbtn:'Add to cart',
  costumes:'Pet & People costumes',

  shippingrules:{
    firstrule:'Free shipping on orders over $50!',
    secondrule:'No-Risk Money Back Guarantee!',
    thirdrule:'No Hassle Refunds',
    fourthrule:'Secure Payments',
  },
  
  checkoutmethod:{
    text:'Guaranteed Safe Checkout',
    paymentmethodimg:'/public/assets/images/paymentmethod.png'

  }


}

]

const product = obj[paramdata.id] 


  return (
    <div className='shopdetails'>
      <div className="left">
        <img src={product.img} alt="" />
      </div>
      <div className="right">
        <h1>{product.h3}</h1>
        <h3>{product.h4} & Free Shipping</h3>
        <p>{product.productDescription}</p>
        <div className="quantity">
        <button onClick={descremnt}>-</button>

          <div className="quantity-value">
          <h1>{itemincrement}</h1>
            
          </div>
          <button onClick={increment}>+</button>
        </div>
        <div className="addtocart">
        <Link to='/Cart'><button >{product.cartbtn}</button></Link>  
        </div>
        <div className="categoryname">
        <h5>Category  <span>{product.costumes}</span> </h5>
        </div>

        <div className="shippingrules">
        <h2>{product.shippingrules.firstrule}</h2>
          <ul>
            <li>{product.shippingrules.secondrule}</li>
            <li>{product.shippingrules.thirdrule}</li>
            <li>{product.shippingrules.fourthrule}</li>
          </ul>
        </div>

        <div className="gaurented">
          <h2>{product.checkoutmethod.text}</h2>
          <div className="methodsimages">
            <img src={product.checkoutmethod.paymentmethodimg} alt="" />
          </div>
        </div>
        

      

      </div>
    
    </div>
  )
}

export default Shopdetails
