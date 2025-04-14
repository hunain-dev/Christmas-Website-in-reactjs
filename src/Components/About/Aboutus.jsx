import React from 'react'
import Landingpage from '../Home/Landingpage'
import ChristmasGifts from '../Home/ChristmasGifts';
import Ourpromises from './Ourpromises';
const Aboutus = () => {

  const Aboutus = {
    Aboutuswords: 'A Few Words',
    Aboutuskeys: 'About Us'
  };
  
  const ChristmasGiftss = {
    magicchristmas:'Spreading Joy, One Gift at a Time',
    joychristmas:`We create a place where the spirit of Christmas is celebrated in every product`,
    img:'https://cdn.creatureandcoagency.com/uploads/2020/10/Facts-about-Chrismtas-5.jpg'      
    
  }

  const ChristmasGiftsData = {
    ChristmasGiftsname: 'Join the Christmas Gifts Experience',
    holiday: 'Start Your Holiday Shopping Today!'
  }; 

  
  return (
    <div>
      <Landingpage name={Aboutus}/>
      <ChristmasGifts magicofchristmas={ChristmasGiftss} />
      <Landingpage name={ChristmasGiftsData} />
      <Ourpromises />
      <Landingpage name={ChristmasGiftsData} />


 </div>
  )
}

export default Aboutus
