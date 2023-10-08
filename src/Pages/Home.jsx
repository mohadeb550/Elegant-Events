import SatisfiedClients from "../components/SatisfiedClients";
import Services from "../components/Services";
import Slider from "../components/Slider";


export default function Home() {

  return (
    <section className="max-w-[1300px] mx-auto px-4">

     <Slider/>
      <Services/>
      <SatisfiedClients/>
    </section>
  )
}
