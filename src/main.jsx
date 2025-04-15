import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUs from './components/AboutUs.jsx'
import Recruiters from './components/Recruiters.jsx'
import TeamMembers from './components/TeamMembers.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about-us',
        element : <AboutUs/>
      },
      {
        path:'/recruiters',
        element : <Recruiters/>
      },
      {
        path:'/team',
        element : <TeamMembers/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)