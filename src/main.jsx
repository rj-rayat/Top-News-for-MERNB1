import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Router'
import ContextProvider from './context/ContextProvider'


createRoot(document.getElementById('root')).render(

  <ContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </ContextProvider>
 
    
  
)
