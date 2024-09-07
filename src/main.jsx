import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
     
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
     <RouterProvider router={router} />
     </HelmetProvider>
 
  </StrictMode>,
)
