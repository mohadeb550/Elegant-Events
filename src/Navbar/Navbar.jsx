import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


export default function Navbar() {

  const { currentUser , logOut } = useContext(AuthContext);
  const navigate = useNavigate();


  const navLinks = <>
   <li><NavLink to='/'> Home </NavLink></li>
   <li><NavLink to='/about'> About </NavLink></li>
   <li><NavLink to='/support'> Support </NavLink></li>
  </>
    
    const signOut = () => {
      logOut()
      .then(result => {
        navigate('/');
        toast.success('Logged Out !')
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
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl uppercase"> Elegant Events </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>

  <div className="dropdown dropdown-end flex items-center justify-center gap-2">
    
        {!currentUser && <Link to='/login'><button className="font-semibold border p-1 px-3 rounded-full transition-all hover:bg-gray-100"> Login </button></Link>}
        <h4 className="font-semibold"> {currentUser?.displayName || 'User'}</h4>
        <div className="z-30 lg:w-10 rounded-full">
          <img tabIndex={0} src={currentUser?.photoURL || '/avatar.jpg' } className="dropdown w-8 md:w-9 cursor-pointer rounded-full" />

          {currentUser && 
         <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">
         <li className="cursor-pointer transition-all hover:bg-gray-200 p-1 rounded" onClick={()=> signOut() }> Log out</li>
        </ul>}
        </div>
     
    </div>

</div>
  )
}
