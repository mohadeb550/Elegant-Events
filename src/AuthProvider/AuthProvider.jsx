import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);



export default function AuthProvider({children}) {

    const [ sliderImages , setSliderImages ] = useState(null);
    const [ services , setServices ] = useState(null);
    const [ currentUser ,setCurrentUser ] = useState(null);
    const [ loading , setLoading ] = useState(true);


    // fetching data 
    useEffect(()=>{
        fetch('/slider.json').then(res => res.json())
        .then(data => setSliderImages(data));

        fetch('/services.json').then(res => res.json())
        .then(data => setServices(data));
    },[])


    // firebase observer
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setCurrentUser(currentUser);
        setLoading(false);
      })
      return ()=>{
        unsubscribe();
      }
    },[])



    // dynamic context value provide
    const authInfo = { sliderImages , services, currentUser, loading }

    if(loading){return  <span className="loading loading-bars  bg-yellow-600 w-10 md:w-16 absolute top-1/3 left-2/4"></span>}

  return (
    <>
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    </>
  )
}
