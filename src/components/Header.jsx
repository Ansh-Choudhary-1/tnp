import React from 'react'
import { Link } from 'react-router'
function Header() {
  return (
    <header>
        {/* Upper Navigation */}
        <div className='w-full mx-auto '>
        <div className='bg-gradient-to-r from-red-600 to-rose-600 text-white py-2'>
           <p className='text-center text-sm font-medium'>Training and Placements - Netaji Subhas University of Technology</p>
        </div>
        <div className='flex w-full justify-between items-center px-4 h-16'>
            <div className='text-2xl font-bold'>
            <img src="https://www.tnpnsut.in/static/media/NSUTlogo.33414252dc1dd6934309.png" alt="NSUT Logo" className="h-12 w-12" />


            </div>
            <div className='flex space-x-4'>
                <a href="/about-us" className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>About Us</a>
                <a href="/Recruiters" className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>For Recruiters</a>
                <a href="/data" className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>Placement Stats</a>
                <a href="/team" className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>Our Team</a>
                <a href="/contact" className='text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium'>Contact Us</a>

            </div>

        </div>
        <nav className='bg-gray-50 border-b  border-gray-200'>
            <div className='max-w-7xl mx-auto px-4'></div>
        </nav>
        <div className='bg-gray-50 border-b  border-gray-200'>
            <div className='w-full mx-auto '>
            <div className='flex px-4 w-full justify-between items-center h-12'>
            
            <div className='flex space-x-4'>
                <a href="#" className='text-sm font-medium text-gray-600 hover:text-blue-600'>About NSUT</a>
                <a href="#" className='text-sm font-medium text-gray-600 hover:text-blue-600'>Media</a>
                <a href="#" className='text-sm font-medium text-gray-600 hover:text-blue-600'>Academic Curriculum</a>
                <a href="#" className='text-sm font-medium text-gray-600 hover:text-blue-600'>Alumni</a>

            </div>
            <div className='h-8 w-24 flex justify-center items-center mr-10 bg-rose-600 rounded rounded-lg'>
                <a href="#" className='text-sm font-medium text-gray-100 hover:text-gray-200'>Login</a>
                
            </div>

        </div>
            </div>
        </div>
    </div>
      </header>
  )
}

export default Header