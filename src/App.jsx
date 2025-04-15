import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link, Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className='flex flex-col min-h-screen '>
    <Header/>
    <main className='flex-1'>
    <Outlet/>
    </main>
    <Footer/>
  </div>
  )
}

export default App