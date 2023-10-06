import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ServiceDetails from "../components/ServiceDetails";


const router = createBrowserRouter([

    {path:'/', element: <Root/>, children:[

        {path:'/', element: <Home/>},
        {path:'/service/:id', element: <ServiceDetails/>}
        
    ]}
])

export default router;