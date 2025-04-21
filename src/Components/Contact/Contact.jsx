import React from 'react'
import Landingpage from '../Home/Landingpage'
import Contactform from './Contactform'
import Shippingmethods from '../Contact/Shippingmethods'
const Contact = () => {

  const Contacts = {
    gettouch:'Get in Touch',
    getcontact:'Contact'
  }

  const ChristmasGiftsData = {
    ChristmasGiftsname: 'Join the Christmas Gifts Experience',
    holiday: 'Start Your Holiday Shopping Today!'
  }; 

  return (
    <div>
      <Landingpage name={Contacts}/>
      <Contactform/>
      <Shippingmethods/>
      <Landingpage name={ChristmasGiftsData} />

      </div>
  )
}

export default Contact
