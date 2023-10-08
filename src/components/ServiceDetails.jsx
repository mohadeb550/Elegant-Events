import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function ServiceDetails() {

    const [ foundService, setFoundService ] = useState({});
    const { services, currentUser , loading } = useContext(AuthContext)
    const { id } = useParams();

    // console.log(services, currentUser, id)

    useEffect(()=>{
        setFoundService(services.find(service => service.id.toString() === id));
    },[])

   const { name , image, features } = foundService || {};

  return (
    <div className="mt-6 mb-14 px-4 md:px-16 flex flex-col gap-7">
        
        <div className="relative grid h-[17rem] md:h-[30rem] w-full  flex-col items-end justify-start overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div className={`absolute inset-0 m-0 overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}> <img src={image} className="h-full w-full object-cover"/>
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/20"></div>
  </div>
  <div className="relative p-5 md:p-7 lg:p-10">
    <h2 className="block font-sans text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.5] tracking-normal text-yellow-500 opacity-90 antialiased text-left">
    {name}
    </h2>
  </div>
</div>
       
       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features?.map((feature, index) => {
        return <div key={index} className="border-b p-3">
        <h4 className="text-xl md:text-2xl font-semibold text-amber-600"> {feature.package} </h4>
        <p className="text-gray-600"> {feature.details} </p>
      </div>
      }
      )}
       </section>
      

    </div>
  )
}
