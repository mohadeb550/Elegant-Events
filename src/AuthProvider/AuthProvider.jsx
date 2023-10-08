import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export default function AuthProvider({children}) {

    const [ sliderImages , setSliderImages ] = useState(null);
    const [ services , setServices ] = useState(null);
    const [ allFeedback , setAllFeedback ] = useState(null);
    const [ currentUser ,setCurrentUser ] = useState(null);
    const [ loading , setLoading ] = useState(true);


    // fetching data 
    useEffect(()=>{
        fetch('/slider.json').then(res => res.json())
        .then(data => setSliderImages(data));

        fetch('/services.json').then(res => res.json())
        .then(data => setServices(data));

        fetch('/feedback.json').then(res => res.json())
        .then(data => setAllFeedback(data));
    },[])

    // register with email & password 
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with google
    const loginWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    }

    // login with github
    const loginWithGithub = () => {
      return signInWithPopup(auth, githubProvider);
    }

    // login with email & password
    const loginUser = (email, password ) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user 
    const logOut = () => {
     return signOut(auth);
    }

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
    const authInfo = { sliderImages , services, allFeedback,  createUser, loginUser, loginWithGoogle, loginWithGithub, logOut ,  currentUser, loading }


    if(loading){return  <span className="loading loading-spinner text-warning w-10 md:w-16 absolute top-[15%] left-2/4"></span>}

  return (
    <>
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    </>
  )
}
