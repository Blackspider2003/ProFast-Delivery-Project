import {createBrowserRouter} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Components/AboutUs";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../Pages/Authentication/LogIn";
import Register from "../Pages/Authentication/Register";
import Coverage from "../Pages/Coverage/Coverage";

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
                                path: '/coverage',
                                element: <Coverage></Coverage>,
                                loader: () => fetch ('/public/warehouses.json')
                },
                { 
                                path: '/about-us',
                                element: <AboutUs></AboutUs>,
                },
    ]
  },
  { 
    path: '/',
    element: <AuthLayout></AuthLayout>,
    children: [ 
      { 
        path: 'login',
        element: <LogIn></LogIn>,
      },
      { 
        path: 'register',
        element: <Register></Register>,
      },
    ]
  }
]);

