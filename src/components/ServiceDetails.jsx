import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function ServiceDetails() {

    const [ foundService, setFoundService ] = useState({});
    const { services, currentUser , loading } = useContext(AuthContext)
    const { id } = useParams();


    useEffect(()=>{
        setFoundService(services?.find(service => service.id.toString === id));
    },[])


    if(loading){return <span className="loading loading-bars loading-lg"></span>}

  return (
    <div className="mt-6 mb-14">
        
        <div className="relative">
            <img className=" h-[400px] md:[550px] lg:h-[700px] w-full object-cover rounded-md" src={foundService.image} />
        </div>
        <h1 className="text-4xl font-bold my-5">  </h1>
        <p> {foundService.description} </p>

    </div>
  )
}
