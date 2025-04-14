import React from 'react'

const Customerexpericnee = () => {
    const objcustomer = [
        {
            p:'ChristmasGifts truly made our holiday season special! The ornaments and decorations we ordered were not only beautiful but also of excellent quality. They added a magical touch to our home, and we received countless compliments from our guests. The personalized stockings were a big hit, and the pet costumes were a hilarious addition to our family Christmas card.',
            img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/testimonial-02.jpg',
        },
        {
            p:'The customer service was exceptional, and our orders arrived on time, making our holiday preparations stress-free. Thank you, ChristmasGifts, for helping us create wonderful memories this Christmas season. We cant wait to shop with you again next year',
            img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/testimonial-03.jpg',
        }
    ]
  return (
    <div className='Customerexpericnee'>
      <div className="Customerexpericneeleft">
        <h1>Hear What Our <br /> Customers Say
        </h1>
        <p>Discover why customers from all around <br /> the world love ChristmasGifts


        </p>
      </div>
      <div className="Customerexpericneesays">
        {
            objcustomer.map((elem,index)=>{
                return(
                    <div key={index} className="Customerexpericneesayscard">
                       <p>{elem.p}</p>
                       <div className="costumerimage">
                        <img src={elem.img} alt="" />
                       </div>

                      </div>
                )
            })
        }
     

      </div>
    </div>
  )
}

export default Customerexpericnee
