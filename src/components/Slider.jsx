
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


export default function App() {

    const { sliderImages } = useContext(AuthContext)

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-4">

      {sliderImages?.map(image =>  <SwiperSlide key={image.id}> <img src={image.image} className='h-[250px] md:h-96 lg:h-[500px] w-full object-cover'/> </SwiperSlide>)}
      </Swiper>
    </>
  );
}
