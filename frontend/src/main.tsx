import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { StrictMode } from 'react'
import { router } from './router'
import { ShopContextProvider } from './context/ShopContext'

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router}/>
    </ShopContextProvider>
    </StrictMode>
)
