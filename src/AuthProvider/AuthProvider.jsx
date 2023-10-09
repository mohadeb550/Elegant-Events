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
    const [ authLoading , setAuthLoading ] = useState(true);
    const [ dataLoading , setDataLoading ] = useState(true);


    // fetching data 
    useEffect(()=>{
        fetch('/slider.json').then(res => res.json())
        .then(data => setSliderImages(data));

        fetch('/services.json').then(res => res.json())
        .then(data => setServices(data));

        fetch('/feedback.json').then(res => res.json())
        .then(data => setAllFeedback(data));

        setDataLoading(false)
    },[])

    // register with email & password 
    const createUser = (email, password) => {
      setAuthLoading(true);
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
      setAuthLoading(true);
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
        setAuthLoading(false);
      })
      return ()=>{
        unsubscribe();
      }
    },[])



    // dynamic context value provide
    const authInfo = { sliderImages , services, allFeedback,  createUser, loginUser, loginWithGoogle, loginWithGithub, logOut ,  currentUser, authLoading }


    if(authLoading || dataLoading){return  <span className="loading loading-spinner text-red-400 w-9 md:w-12 absolute top-[13%] left-2/4"></span>}

  return (
    <>
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    </>
  )
}
