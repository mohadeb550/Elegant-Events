import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast  from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function Login() {

  const { loginUser , loginWithGoogle , loginWithGithub} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form  = new FormData(e.target);
        const email = form.get('email')
        const password = form.get('password')

        loginUser(email, password)
        .then(result => {
    
            e.target.reset();
            toast.success('Login Successful !');;
            navigate(location.state? location.state : '/');
        })
        .catch(error =>  toast.error(error.message))
    }

    const socialLogin = (platform) => {
      platform()
      .then(result => {
          toast.success('Login Successful!')
          navigate(location.state? location.state : '/');
      })
      .catch(error => {
          toast.error(error.message)
      })
  }



  return(
    <div className="hero h-[600px] bg-base-200">
    <div className="hero-content flex-col w-[360px] md:w-[420px]">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl text-red-500 font-bold">Login now!</h1>
      </div>
      <div className="rounded flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="p-5">


        <form onSubmit={handleLogin}>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Email" className="input input-bordered" name="email" />
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="Password" className="input input-bordered" name="password" />
          

            <div className="mt-3">
                <h4 className="text-sm font-semibold"> Don't Have An Account? <Link to='/register'> <span className="text-orange-500  hover:underline"> Register </span></Link> </h4>
            </div>

            <div className="flex flex-col justify-evenly gap-3 mt-4 ">
                <div onClick={()=> socialLogin(loginWithGoogle)} className="py-1 px-2 border rounded flex gap-1 items-center justify-center hover:bg-gray-50 cursor-pointer" > <FcGoogle className="text-2xl"/> <p className="text-sm font-semibold text-slate-600">Sign In Google</p> </div>

                <div onClick={()=> socialLogin(loginWithGithub)} className="py-1 px-2 border rounded flex gap-1 items-center justify-center hover:bg-gray-50 cursor-pointer"  > <FaGithub className="text-2xl"/> <p className="text-sm font-semibold text-slate-600">Sign In Github</p> </div>
            </div>

          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error text-gray-50 hover:bg-rose-500" type="submit"> Login </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}
