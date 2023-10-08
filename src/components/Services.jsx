import { useContext, useEffect } from "react";
import Service from "./Service";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Aos from "aos";
import 'aos/dist/aos.css'



export default function Services() {

    const { services } = useContext(AuthContext)

    useEffect(()=>{
      Aos.init();
    },[])
  
   

   
  return (
    <section className="my-8 md:my-16 lg:my-24" >
        <h1 className="text-[26px] md:text-3xl lg:text-5xl text-yellow-600 font-bold text-center mb-10 md:mb-16 lg:mb-20" data-aos='zoom-out'> Our Services </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
            {services?.map(service => <Service key={service.id} service={service} data-aos ='fade right'/>)}
        </div>
    </section>
  )
}
