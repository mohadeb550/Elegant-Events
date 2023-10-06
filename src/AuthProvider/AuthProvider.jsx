import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext(null);



export default function AuthProvider({children}) {

    const [ sliderImages , setSliderImages ] = useState(null);

    useEffect(()=>{
        fetch('/slider.json').then(res => res.json())
        .then(data => setSliderImages(data))
    },[])



    // dynamic context value provide
    const authInfo = { sliderImages }

  return (
    <>
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    </>
  )
}
