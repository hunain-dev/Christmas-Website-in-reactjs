import React from 'react'
import Button from './Button/Button'
const Outfits = () => {
    const objimage = [
        {
          img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-08.jpg'
        },
        {
            img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/product-06.jpg'
          }
      ]
  return (
    <div className='Outfits'>
        <div className="outfitsleft">
            <h5>more than just outfits
            </h5>
            <h1>Dress Up Your Furry Friends for the Holidays
            </h1>
            <p>At ChristmasGifts, we believe in including every member of the family in the festive fun, and that includes your beloved pets! Introducing our enchanting collection of Christmas Pet Costumes, specially designed to make your furry companions a part of your holiday celebrations.</p>
            <Button/>
        </div>

<div className="outfitscenter">      
{
objimage.map((elem,index)=>{
    return(
        <div key={index} className="outfitscenterimage">
            <img src={elem.img} alt="" />

            </div> 
    )
})

            }

           

        </div>
    </div>
  )
}

export default Outfits
