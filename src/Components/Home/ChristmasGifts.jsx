import React from 'react'

const ChristmasGifts = ({magicofchristmas}) => {

  return (
    <div className='ChristmasGifts'>
        <div className="ChristmasGiftstop">

        <h4>{magicofchristmas.magicchristmas}
        </h4>
        <h2>{magicofchristmas.joychristmas}</h2>
        </div>
        <div className="ChristmasGiftspic">
            <img src={magicofchristmas.img} alt="" />
            

        </div>


      
    </div>
  )
}

export default ChristmasGifts
