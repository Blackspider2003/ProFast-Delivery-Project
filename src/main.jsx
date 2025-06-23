import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import 'aos/dist/aos.css';
import Aos from 'aos'
import {AuthProvider} from './Provider/AuthProvider.jsx'

Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist lg:w-11/12 lg:mx-auto mx-2'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
