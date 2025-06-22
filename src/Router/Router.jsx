import {createBrowserRouter} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Components/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [ 
                { 
                                index: true,
                                element: <Home></Home>,
                },
                { 
                                path: '/about-us',
                                element: <AboutUs></AboutUs>,
                },
    ]
  },
]);

