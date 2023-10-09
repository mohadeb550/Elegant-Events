
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoMdQuote } from 'react-icons/io'
import Aos from "aos";
import 'aos/dist/aos.css'




function AutoplaySlider() {

  const { allFeedback } = useContext(AuthContext);
  
  useEffect(()=>{
    Aos.init();
  },[])



  const responsiveSettings = [
    {
      breakpoint: 1024, 
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
      },
    },
  ];


  const settings = {
    dots: true,
    infinite: true, 
    speed: 500, 
    autoplay: true, 
    autoplaySpeed: 2000,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    responsive: responsiveSettings,
  };

  return (
    <div className="autoplay-slider my-32 w-[95%] mx-auto" data-aos="fade-down">
        <h1 className="text-[26px] md:text-3xl lg:text-5xl text-yellow-600 font-bold text-center mb-10 md:mb-16 lg:mb-20"> Satisfied Clients About Us</h1>
      <Slider {...settings}>

       {allFeedback.map(feedback => {
        return (
          <>
           <div className='bg-gray-100 p-[26px] md:p-8 flex flex-col justify-center items-center gap-3 mx-2 h-80'>
          <span><IoMdQuote className='text-3xl text-orange-500'/></span>
          <h4 className='text-[15px] md:text-[16px] font-semibold text-gray-500'> {feedback.comment}</h4>
          <img className='w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full object-cover' src={feedback.image}/>
          <h2 className='font-semibold text-lg'> {feedback.clientName} </h2>
        </div>
          </>
        )
       })}
        
      </Slider>
    </div>
  );
}

export default AutoplaySlider;