import { AiOutlineCamera} from 'react-icons/ai'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function Offers() {

    useEffect(()=>{
        Aos.init();
      },[])
    

  return (
    <section className="my-24 flex flex-col-reverse lg:flex-row justify-between bg-red-50 py-10 md:py-16 lg:py-20 rounded-lg px-12 gap-4 md:gap-16 lg:gap-24" data-aos="zoom-in-right">

        <div className='flex-1 grid grid-cols-2 md:grid-cols-3 gap-5 text-center content-center'>

            <div className='flex flex-col items-center justify-center  h-32 lg:h-44 gap-1' data-aos="fade-right">
               <img src='/decoration-icon.png' className='w-14 md:w-16 lg:w-20'/>
                <p className='text-gray-600 lg:text-xl font-semibold'>Catering and decor</p>
            </div>
            <div className='flex flex-col items-center justify-center  h-32 lg:h-44 gap-1' data-aos="fade-right">
            <img src='/sunflower-icon.png' className='w-14 md:w-16 lg:w-20'/>
                <p className='text-gray-600 lg:text-xl font-semibold'>Floral</p>
            </div>
            <div className='flex flex-col items-center justify-center  h-32 lg:h-44 gap-1' data-aos="fade-right">
            <img src='/Circle-icons-camera.svg' className='w-14 md:w-16 lg:w-20'/>
                <p className='text-gray-600 lg:text-xl font-semibold'>Photo, Video and Audio</p>
            </div>
            <div className='flex flex-col items-center justify-center  h-32 lg:h-44 gap-1' data-aos="fade-left">
            <img src='/gift-present-giving-icon.png' className='w-14 md:w-16 lg:w-20'/>
                <p className='text-gray-600 lg:text-xl font-semibold'>Invitation Cards</p>
            </div>
            <div className='flex flex-col items-center justify-center  h-32 lg:h-44 gap-1' data-aos="fade-left">
            <img src='/balloons-color-icon.png' className='w-14 md:w-16 lg:w-20'/>
                <p className='text-gray-600 lg:text-xl font-semibold'>Entertainment</p>
            </div>
            <div className='flex flex-col items-center justify-center  h-32 lg:h-44 gap-1' data-aos="fade-left">
            <img src='/bungalow-villa-color-icon.png' className='w-14 md:w-16 lg:w-20'/>
                <p className='text-gray-600 lg:text-xl font-semibold'>Venue Selection</p>
            </div>

        </div>
        <div className='flex-1'>
             
            <div className='space-y-3'>
                <h1 className="text-4xl md:text-5xl lg:text-7xl opacity-95 font-black" data-aos='fade-left'> What we offer </h1>
            <div>
            <img src="/miking.jpg" className="w-96" data-aos="fade-up"/>
            </div>
                <p className= 'text-base md:text-lg text-gray-500 font-semibold pb-1 md:pb-5'>Each event and client is unique, and we believe our services should be as well. We know what hiring a planner is all about!</p>
                <button className="bg-yellow-600 py-3 lg:py-4 px-9 text-white rounded-full font-semibold transition-all hover:bg-yellow-700 text-sm md:text-base"> More Services</button>
            </div>
            
        </div>
      
    </section>
  )
}
