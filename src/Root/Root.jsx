import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";


export default function Root() {

  return (
    <>

    <Toaster/>
    <Navbar/>
    <Outlet/>
    <Footer/>

    </>
  )
}
