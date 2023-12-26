import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
    },
    
])

export default Router;