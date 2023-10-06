import { useContext } from "react";
import Service from "./Service";
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function Services() {

    const { services } = useContext(AuthContext)

  return (
    <section className="my-24">
        <h1 className="text-5xl text-gray-500 font-bold text-center mb-20"> Our Services </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services?.map(service => <Service key={service.id} service={service}/>)}
        </div>
    </section>
  )
}
