
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Aos from "aos";
import 'aos/dist/aos.css'


export default function App() {
    const { sliderImages } = useContext(AuthContext)

    useEffect(()=>{
      Aos.init();
    },[])
  
   

  return (
      <section data-aos='fade-right'>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-4">

{sliderImages?.map(image =>  <SwiperSlide key={image.id}> 

<>
<div className="relative flex-col h-[220px] md:h-80 lg:h-[450px] rounded-xl bg-white bg-clip-border text-center text-gray-700">
<div style={{ backgroundImage: `url(${image.image})`, backgroundRepeat: 'no-repeat'
}} className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/40"></div>
</div>
<div className="relative py-3 md:py-14 px-6 md:px-12 h-full flex flex-col justify-end">
<h2 className="mb-1 md:mb-3 block font-sans text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.5] tracking-normal text-yellow-400 antialiased">
{image.name}
</h2>
<h5 className="mb-2 md:mb-4 text-xs md:text-lg block font-sans font-semibold leading-snug tracking-normal text-gray-400 antialiased">
{image.description.slice(0, 100)}
</h5>

</div>
</div>
</> 

</SwiperSlide>)}
</Swiper> 
      </section>
   
  );
}

