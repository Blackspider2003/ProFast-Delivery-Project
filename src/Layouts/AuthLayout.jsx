import React from 'react';
import authImg from '../assets/authImage.png' 
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
                return (
                                
                                <div className='flex flex-col lg:flex-row-reverse lg:items-center'>
                                                <ToastContainer/>
                                           <div>
                                                <img src={authImg} alt="" />  
                                                </div>   
                                                <div className='lg:w-2/3'>
                                                                <Outlet></Outlet>
                                                </div>
                                </div>
                );
};

export default AuthLayout;