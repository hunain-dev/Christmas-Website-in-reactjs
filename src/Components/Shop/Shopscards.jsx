import React from 'react'
import { Link } from 'react-router-dom'

const Shopscards = () => {
  const obj = [
    {
        img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-018-400x600.jpg',
        h3:'Candy cane lane delights',
        h4:'$ 67.00',
        detailsbutton:'View details',


    },
    {

        img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-014-400x600.jpg',
        h3:'Christmas holiday around',
        h4:'$ 70.00',
        detailsbutton:'View details'



    },
    {

        img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-013-400x600.jpg',
        h3:'Christmas human harmony',
        h4:'$ 45.00',
        detailsbutton:'View details'
 

    },
    {

        img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-012-400x600.jpg',
        h3:'tree collection',
        h4:'$ 37.00',
        detailsbutton:'View details'


    },
    {
      img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-07-400x600.jpg',
      h3:'Festive Family Fashion: Pet Edition',
      h4:'$ 21.00',
      detailsbutton:'View details'


  },
  {
    img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-017-400x600.jpg',
    h3:'Fireside Elegance Ensemble',
    h4:'$ 70.00',
    detailsbutton:'View details'


},   
 {
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-010-400x600.jpg',
  h3:'Fur & Festivity Fashion Parade',
  h4:'$ 90.00',
  detailsbutton:'View details'


},  
  {
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-016-400x600.jpg',
  h3:'Golden Glow Festivities',
  h4:'$ 10.00',
  detailsbutton:'View details'


},    {

  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-01-400x600.jpg',
  h3:'Holiday Elegance Mug',
  h4:'$ 65.00',
  detailsbutton:'View details'


},    {

  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-09-400x600.jpg',
  h3:'Holiday Hound & Human Harmony',
  h4:'$ 77.00',
  detailsbutton:'View details'


},    {

  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-04-400x600.jpg',
  h3:'Jingle All the Way Mug',
  h4:'$ 45.00',
  detailsbutton:'View details'


},    {
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-02-400x600.jpg',
  h3:'Merry Memories Photo Mug',
  h4:'$ 94.00',
  detailsbutton:'View details'


}
]
  return (
    <div className='Shopscards'>
      <div className="Shopscardstop">
        <h2>Showing 1–12 of 19 results</h2>
      </div>
      <div className="shopcarditem">
      <div className="featuredcard">
{
 obj.map((elem,index)=>{
    return(
        <div key={index} className="carddetails">
            <div className="cardimage">
            <img src={elem.img} alt="" />
            </div>
            <h3>{elem.h3}</h3> 
            <h4>{elem.h4}</h4>
            <Link to={`/Shop/productdetails/${index}`}>
            <button>{elem.detailsbutton}</button></Link> 
        </div>

)
})
}
           

</div>
      </div>
      
    </div>
  )
}

export default Shopscards
