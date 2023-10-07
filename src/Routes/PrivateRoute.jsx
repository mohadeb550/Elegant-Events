import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";


export default function PrivateRoute({children}) {

  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
 
  if(!currentUser){
    return <Navigate state={location.pathname} to='/login'/>;
  }

  return (
    <>
    {children}
    </>
  )
}
