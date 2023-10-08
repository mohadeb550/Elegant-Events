import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { MdOutlineLogout} from 'react-icons/md'
import { TbLogout} from 'react-icons/tb'


export default function Navbar() {

  const { currentUser , logOut } = useContext(AuthContext);
  const navigate = useNavigate();


  const navLinks = <>
   <li ><NavLink className={({isActive})=> isActive && 'bg-transparent font-semibold text-yellow-600 ' } to='/'> Home </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive && 'bg-transparent font-semibold text-yellow-600 ' } to='/contacts'> Contacts </NavLink></li>
   <li ><NavLink className={({isActive})=> isActive && 'bg-transparent font-semibold text-yellow-600 ' } to='/blog'> Blog </NavLink></li>
  </>
    
    const signOut = () => {
      logOut()
      .then(result => {
        toast.success('Logged Out !')
        navigate('/');
      })
      .catch(error => {

      })
    }

  return (
    <div className="navbar bg-base-100 max-w-[1300px] mx-auto flex justify-between">
  <div className="navbar-start">
    <div className="dropdown z-50">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
        {navLinks}
      </ul>
    </div>
    <div className="flex items-center gap-1">
    <img src='/logo.png' className="w-9 md:w-12 lg:w-16"/>
    <p className="text-base md:text-xl lg:text-2xl font-semibold text-yellow-600"> Elegant</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex items-center gap-10 menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>

  <div className="dropdown dropdown-end flex items-center justify-center gap-2">
    
        {!currentUser && <Link to='/login'><button className="font-semibold border p-1 px-3 rounded-full transition-all hover:bg-gray-100"> Login </button></Link>}
        {currentUser && <h4 className="font-semibold"> {currentUser?.displayName || 'User'}</h4>}
        
        <div className="z-30 lg:w-10 rounded-full p-[2px] border border-gray-500">
          <img tabIndex={0} src={currentUser?.photoURL || '/avatar.jpg' } className="dropdown w-8 md:w-9 cursor-pointer rounded-full" />

          {currentUser && 
         <ul tabIndex={0} className="dropdown-content p-2 shadow bg-base-100 rounded w-52 flex items-center">
         <li className="cursor-pointer transition-all hover:bg-gray-200 p-1 rounded " onClick={()=> signOut() }> Log out</li> 
          <MdOutlineLogout className="text-yellow-600"/> 
        </ul>}
        </div>
     
    </div>

</div>
  )
}
