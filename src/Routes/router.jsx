import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ServiceDetails from "../components/ServiceDetails";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact";
import BlogPage from "../Pages/Blog";


const router = createBrowserRouter([

    {path:'/', element: <Root/>, errorElement: <NotFound/>, children:[

        {path:'/', element: <Home/>},
        {path:'/login', element: <Login/>},
        {path:'/register', element: <Register/>},
        {path:'/contacts', element: <PrivateRoute><Contact/></PrivateRoute>},
        {path:'/blog', element: <PrivateRoute><BlogPage/> </PrivateRoute>},
        {path:'/service/:id', element: <PrivateRoute><ServiceDetails/></PrivateRoute> }
        
    ]}
])

export default router;