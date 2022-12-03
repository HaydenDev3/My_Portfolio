import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Services } from './pages/ServicesPage'
import { RouterProvider, Route, Link, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    )
  },
  {
    path: "/services",
    element: (
      <Services />
    )
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={routes} />
)
