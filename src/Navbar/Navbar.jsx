import { NavLink } from "react-router-dom";


export default function Navbar() {

  const navLinks = <>
   <li><NavLink to='/'> Home </NavLink></li>
   <li><NavLink to='/about'> About </NavLink></li>
   <li><NavLink to='/support'> Support </NavLink></li>
  </>
    

  return (
    <div className="navbar bg-base-100 max-w-[1300px] mx-auto flex justify-between">
  <div className="navbar-start">
    <div className="dropdown">
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
    
        <button className="font-semibold border p-1 px-3 rounded-full transition-all hover:bg-gray-100"> Login </button>
        <div className="w-9 lg:w-10 rounded-full">
          <img src='/avatar.jpg'/>
        </div>
     
    </div>

</div>
  )
}
