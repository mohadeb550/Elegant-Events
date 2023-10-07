
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config.js";
import toast  from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'



export default function SignUp() {
    const navigate = useNavigate()
    // const { createUser , loginWithGoogle , loginWithGithub} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        // createUser(email, password)
        // .then(result => {
        //     updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
        //     e.target.reset();
        //     toast.success('Successfully Account Created!')
        //     navigate('/')
        // })
        // .catch(error =>  toast.error('An error occurred!'))
    }

    // const socialLogin = (platform) => {
    //     platform()
    //     .then(result => {
    //         toast.success('Login Successful!')
    //         navigate('/')
    //     })
    //     .catch(error => {
    //         toast.error('An error occurred!')
    //     })
    // }


  return (
    <div className="hero h-[85vh] bg-base-200">
    <div className="hero-content flex-col w-[360px] md:w-[420px]">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl text-red-500 font-bold"> Create New Account!</h1>
      </div>
      <div className="rounded flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="p-6">


        <form onSubmit={handleSubmit}>
            
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Name" className="input input-bordered" name="name" />
          </div>

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
           

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Photo URL</span>
            </label>
            <input type="text" placeholder="Enter Photo URL" className="input input-bordered" name="photo" />
          </div>

            <div>
                <h4 className="text-sm font-semibold"> Already Have An Account? <Link to='/login'> <span className="text-orange-500 hover:underline"> Login</span></Link> </h4>
            </div>

           
            <div className="flex justify-evenly gap-5 mt-4">
                <div className="py-1 px-2 border rounded flex gap-1 items-center hover:bg-gray-50 cursor-pointer"  > <FcGoogle className="text-2xl"/> <p className="text-sm font-semibold text-slate-600">Sign In Google</p> </div>

                <div className="py-1 px-2 border rounded flex gap-1 items-center hover:bg-gray-50 cursor-pointer" > <FaGithub className="text-2xl"/> <p className="text-sm font-semibold text-slate-600">Sign In Github</p> </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-error text-gray-50 hover:bg-rose-500" type="submit"> Sign Up </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}
