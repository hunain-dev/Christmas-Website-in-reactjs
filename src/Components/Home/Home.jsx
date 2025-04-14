import React, { useEffect } from 'react';
import Landingpage from './Landingpage';
import ChristmasGifts from './ChristmasGifts';
import Featureproduct from './Featureproduct';
import Outfits from './outfits';
import Customerexpericnee from './Customerexpericnee';
import Alert from './Alert';
const Home = () => {


  // ✅ Object for Landing Page
  const landingPageData = {
    expericne: 'Experience the Magic of Christmas',
    festival: 'Explore Our Festive Wonderland of Holiday Delights',
    ehancemoment: 'From enchanting ornaments to cozy holiday apparel, we\'ve curated a collection that will make your home merry and bright'
  };

    // ✅ Object for Christmas Gifts Section
  const ChristmasGiftsData = {
    ChristmasGiftsname: 'Join the Christmas Gifts Experience',
    holiday: 'Start Your Holiday Shopping Today!'
  };

  const ChristmasGiftss = {
    magicchristmas:'We understand the magic of Christmas',
    joychristmas:`we're passionate about spreading the joy and wonder of Christmas`,
    img:'https://websitedemos.net/christmas-shop-04/wp-content/uploads/sites/1421/2023/11/about-01.jpg'      
    
  }

  

  return (
    <div className='Home'>
      <Alert />
      <Landingpage name={landingPageData} />      
      <ChristmasGifts magicofchristmas={ChristmasGiftss} />      
      <Featureproduct />
      <Landingpage name={ChristmasGiftsData} />
      <Outfits />
      <Customerexpericnee />
      <Landingpage name={ChristmasGiftsData} />


    </div>
  );
};

export default Home;
