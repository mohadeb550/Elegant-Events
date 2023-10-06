import { Link } from "react-router-dom";


export default function Service({service}) {

    const { id , name , image ,description, price } = service;
    console.log(image)

  return (
   <div className="relative grid h-[30rem] md:h-[35rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat',  backgroundPosition: 'center'
      }} className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/20"></div>
  </div>
  <div className="relative p-6 py-14 px-6 md:px-12">
    <h2 className="mb-3 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
    {name}
    </h2>
    <h5 className="mb-4 block font-sans font-semibold leading-snug tracking-normal text-gray-400 antialiased">
      {description.slice(0, 120)}
    </h5>

   <div className="flex items-center justify-center gap-4">
    <h4 className="text-4xl text-pink-600 font-bold">{price}$ </h4>
  <Link to={`/service/${id}`}> <button className="bg-yellow-500 py-2 px-3 text-black rounded font-semibold transition-all hover:bg-yellow-600"> View Details </button></Link>
   </div>
   
  </div>
</div>
  )
}
