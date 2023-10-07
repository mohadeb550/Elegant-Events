import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ServiceDetails from "../components/ServiceDetails";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([

    {path:'/', element: <Root/>, errorElement: <NotFound/>, children:[

        {path:'/', element: <Home/>},
        {path:'/login', element: <Login/>},
        {path:'/register', element: <Register/>},
        {path:'/service/:id', element: <ServiceDetails/>}
        
    ]}
])

export default router;