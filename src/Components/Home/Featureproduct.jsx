import React from 'react'
import { Link } from 'react-router-dom'
const Featureproduct = () => {
    const obl = [
        {
            img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-018-400x600.jpg',
            h3:'Candy cane lane delights',
            h4:'67.00',
            detailsbutton:'View details'


        },
        {
            img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-014-400x600.jpg',
            h3:'Christmas holiday around',
            h4:'67.00',
            detailsbutton:'View details'



        },
        {
            img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-013-400x600.jpg',
            h3:'Christmas human harmony',
            h4:'67.00',
            detailsbutton:'View details'

            

        },
        {
            img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-012-400x600.jpg',
            h3:'tree collection',
            h4:'67.00',
            detailsbutton:'View details'


        }


    ]
  return (
    <div className='Featureproduct'>
        <h2>Most Popular
        </h2>
        <h1>featured Products
        </h1>
             <div className="featuredcard">
{
 obl.map((elem,index)=>{
    return(
        <div key={index} className="carddetails">
            <div className="cardimage">
            <img src={elem.img} alt="" />
            </div>
            <h3>{elem.h3}</h3>
            <h4>{elem.h4}</h4>
        <Link to={`/Shop/productdetails/${index}`}><button>{elem.detailsbutton}</button></Link>  


        </div>

)
})
}
           

</div>

        
    </div>
  )
}

export default Featureproduct
