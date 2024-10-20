import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Homepage.jsx'
import './index.css'
import Loader from './Loader.jsx'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Homepage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)