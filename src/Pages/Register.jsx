
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config.js";
import toast  from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { AuthContext } from "../AuthProvider/AuthProvider.jsx";



export default function SignUp() {
  
    const { createUser , loginWithGoogle , loginWithGithub} = useContext(AuthContext);
    const [ error , setError ] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo');

        if(password.length < 6){
          return setError('Password must be 6 characters')
        }

        if(!/(?=.*[A-Z])/.test(password)){
          return setError('Password must have a capital letter')
        }
        if(!/[@#$%^&!*]/.test(password)){
          return setError('Password must have a special character')
        }
       
        createUser(email, password)
        .then(result => {
           updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
            e.target.reset();
            navigate('/');
            toast.success('Successfully Account Created!',{duration: 3000});
        })
        .catch(error =>  toast.error('An error occurred!'))
    }


    const socialLogin = (platform) => {
        platform()
        .then(result => {
            toast.success('Sign Up Successful!')
        })
        .catch(error => {
            toast.error('An error occurred!')
        })
    }


  return (
    <div className="hero h-[1000px] md:h-[800px] bg-base-200 rounded-lg">
    <div className="hero-content flex-col md:flex-row w-full gap-0">

    <div className="text-center lg:text-left bg-white pt-5 md:py-[132px] rounded-l-lg">
        <h1 className="text-[27px] lg:text-[32px] text-yellow-600 font-bold text-center mb-4"> Create New Account !</h1>
        <img src="/11879344_Checklist.jpg" className="w-96"/>
      </div>

      <div className="rounded flex-shrink-0 w-full max-w-sm  bg-base-100">
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
            <span className="text-red-500 text-sm p-1"> {error} </span>
           

            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text"> Photo URL</span>
            </label>
            <input type="text" placeholder="Enter Photo URL" className="input input-bordered" name="photo" />
          </div>

            <div>
                <h4 className="text-sm font-semibold"> Already Have An Account? <Link to='/login'> <span className="text-yellow-600 hover:underline"> Login</span></Link> </h4>
            </div>

           
            <div className="flex flex-col gap-3 mt-4">
                <div className="py-1 px-2 border rounded flex justify-center gap-1 items-center hover:bg-gray-50 cursor-pointer"  onClick={()=> socialLogin(loginWithGoogle) }> <FcGoogle className="text-2xl"/> <p className="text-sm font-semibold text-slate-600" > Sign up  with Google</p> </div>

                <div className="py-1 px-2 border rounded flex justify-center gap-1 items-center hover:bg-gray-50 cursor-pointer" onClick={()=> socialLogin(loginWithGithub) }> <FaGithub className="text-2xl"/> <p className="text-sm font-semibold text-slate-600" > Sign up with Github</p> </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="bg-yellow-600 py-2 px-3 text-gray-100 rounded font-semibold transition-all hover:bg-yellow-700 text-sm md:text-base" type="submit"> Register </button>
          </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}
