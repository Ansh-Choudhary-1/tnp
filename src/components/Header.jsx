import React from 'react'
import { Link } from 'react-router'
function Header() {
  return (
    <header>
        {/* Upper Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <img src="https://www.tnpnsut.in/static/media/NSUTlogo.33414252dc1dd6934309.png" alt="NSUT Logo" className="h-12 w-12" />
              </div>
              <div className="flex items-center space-x-4">
                <Link to ="/about-us"><a  className="text-gray-700 hover:text-gray-900">About Us</a></Link>
                <Link to ='/recruiters'><a  className="text-gray-700 hover:text-gray-900">For Recruiters</a></Link>
                <Link to='/data'><a className="text-gray-700 hover:text-gray-900">Placement Stats</a></Link>
                <Link to='/team'><a className="text-gray-700 hover:text-gray-900">Our Team</a></Link>
                <Link to='/contact'><a className="text-gray-700 hover:text-gray-900">Contact Us</a></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Navigation */}
        <div className="bg-gray-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              <nav className="flex space-x-8">
                <a href="http://www.nsut.ac.in/hi/about-nsut" className="text-gray-700 hover:text-gray-900">About NSUT</a>
                <a href="http://www.nsut.ac.in/hi/photo-gallery" className="text-gray-700 hover:text-gray-900">Media</a>
                <a href="http://www.nsut.ac.in/hi/node/1265" className="text-gray-700 hover:text-gray-900">Academic Curriculum</a>
                <a href="http://www.nsut.ac.in/hi/node/335" className="text-gray-700 hover:text-gray-900">Alumni</a>
              </nav>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header