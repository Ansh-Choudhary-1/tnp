import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router'

function Footer() {
  return (
        <footer className="bg-gray-100 mt-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
             <div className="grid md:grid-cols-4 gap-8">
               <div>
                 <img src="https://www.tnpnsut.in/static/media/NSUTlogo.33414252dc1dd6934309.png" alt="NSUT Logo" className="h-16 w-16 mb-4" />
                 <h3 className="font-bold text-lg mb-2">Netaji Subhas University Of Technology</h3>
                 <p className="text-gray-600">Training and Placements</p>
               </div>
               <div>
                 <h3 className="font-bold text-lg mb-4">Address</h3>
                 <p className="text-gray-600">Dwarka Sector-3, Dwarka Delhi, 110078, India</p>
               </div>
               <div>
                 <h3 className="font-bold text-lg mb-4">Phone</h3>
                 <p className="text-gray-600">9205475078</p>
                 <p className="text-gray-600">9810472670</p>
                 <h3 className="font-bold text-lg mt-4 mb-2">Email</h3>
                 <p className="text-gray-600">placements@nsitonline.in</p>
                 <p className="text-gray-600">placements@nsut.ac.in</p>
               </div>
               <div>
                 <h3 className="font-bold text-lg mb-4">Social Media</h3>
                 <p className="text-gray-600 mb-4">Follow us on social media to find out the latest information</p>
                 <div className="flex space-x-4">
                   <FaTwitter className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
                   <FaFacebook className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
                   <FaInstagram className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
                 </div>
               </div>
             </div>
           </div>
        </footer>
  )
}

export default Footer