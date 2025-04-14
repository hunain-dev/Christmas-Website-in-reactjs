import React from 'react'

const Shopscards = () => {
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


    },
    {
      img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-07-400x600.jpg',
      h3:'tree collection',
      h4:'67.00',
      detailsbutton:'View details'


  },
  {
    img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-017-400x600.jpg',
    h3:'tree collection',
    h4:'67.00',
    detailsbutton:'View details'


},    {
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-010-400x600.jpg',
  h3:'tree collection',
  h4:'67.00',
  detailsbutton:'View details'


},    {
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-016-400x600.jpg',
  h3:'tree collection',
  h4:'67.00',
  detailsbutton:'View details'


},    {
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-01-400x600.jpg',
  h3:'tree collection',
  h4:'67.00',
  detailsbutton:'View details'


},    {
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-09-400x600.jpg',
  h3:'tree collection',
  h4:'67.00',
  detailsbutton:'View details'


},    {
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-04-400x600.jpg',
  h3:'tree collection',
  h4:'67.00',
  detailsbutton:'View details'


},    {
  img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-02-400x600.jpg',
  h3:'tree collection',
  h4:'67.00',
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
 obl.map((elem,index)=>{
    return(
        <div key={index} className="carddetails">
            <div className="cardimage">
            <img src={elem.img} alt="" />
            </div>
            <h3>{elem.h3}</h3> 
            <h4>{elem.h4}</h4>
            <button>{elem.detailsbutton}</button>

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
