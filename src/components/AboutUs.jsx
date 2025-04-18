import { useState } from 'react'

function AboutUs() {
  return (
    <div className="relative max-w-[1200px] mx-auto p-8 bg-white">
      <div className="absolute inset-0 bg-dotted-pattern bg-dot-lg opacity-100 pointer-events-none z-0"></div>
      <div className="text-center mb-12">
        <span className="bg-blue-50 gray px-4 py-2 font-semibold text-red-600 bg-red-50 rounded-full text-sm">About Us</span>
        <h2 className="text-4xl mt-4 mb-4 font-bold text-gray-800">Who are <span className="text-primary">we</span>?</h2>
      </div>

      <div className="flex gap-16 items-start  flex-col lg:flex-row">
        <div className='shadow shadow-md border border-gray-100 rounded rounded-2xl p-2'><div className="flex-none w-full  lg:w-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://www.tnpnsut.in/static/media/statue.6d8dfadc13e33d5e7085.png" 
            alt="Statue" 
            className="w-full h-auto transition-transform duration-300 hover:scale-105 z-10"
          />
        </div></div>

        <div className="flex-1 ">
          <p className="text-base rounded rounded-3xl shadow shadow-xl p-5 border border-gray-100 leading-relaxed text-gray-600 mb-8">
            The Training and Placement Section at NSUT is responsible for all placement-related 
            activities at our institution. We play a vital role in bridging the gap between corporate and 
            academia, ensuring that our students gain hands-on experience through internships during 
            winter and summer breaks. These internships span multinational, private, and public sector 
            companies, as well as government departments and foreign universities.
          </p>

          <p className="text-primary font-medium mb-8">
            Some top-notch organizations where our students have interned and secured 
            placements include:
          </p>

          <div className="mb-12">
            <div className="mb-8 p-6 rounded rounded-2xl shadow shadow-xl border border-gray-100 bg-gray-50 rounded-lg">
              <h3 className="text-xl text-gray-900 mb-4">Technical Profiles</h3>
              <p className="text-gray-600 leading-relaxed">
                Microsoft, Google, Adobe, Goldman Sachs, Rubrik, Tower Research Capital, Uber, Salesforce, 
                D.E. Shaw, Atlassian, PayPal, PhonePe, Walmart, Zomato, Morgan Stanley
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded rounded-2xl shadow shadow-xl border border-gray-100">
              <h3 className="text-xl text-gray-900 mb-4">Non-Tech Profiles</h3>
              <p className="text-gray-600 leading-relaxed">
                Bain and Company, JPMorgan, ZS Associates, McKinsey and Company, BlackRock Group, 
                American Express, KPMG, E&Y, Axis Bank
              </p>
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded rounded-2xl shadow shadow-xl border border-gray-100">
              <h3 className="text-xl text-gray-900 mb-4">Core Profiles</h3>
              <p className="text-gray-600 leading-relaxed">
                Texas Instruments, Nvidia, Qualcomm, Cadence, Samsung, Bharti Airtel, Reliance, Vedanta, 
                Schlumberger, Maruti
              </p>
            </div>
          </div>

       
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center py-6  border border-gray-100 rounded rounded-2xl shadow shadow-2xl ">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">40+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center py-6 border border-gray-100 rounded rounded-2xl shadow shadow-2xl">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">300+</h3>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="text-center py-6 border border-gray-100 rounded rounded-2xl shadow shadow-2xl">
              <h3 className="text-4xl font-bold text-fuchsia-600 mb-2">95%</h3>
              <p className="text-gray-600">Placement Rate</p>
            </div>
            <div className="text-center py-6 border border-gray-100 rounded rounded-2xl shadow shadow-2xl">
              <h3 className="text-4xl font-bold text-primary mb-2">1500+</h3>
              <p className="text-gray-600">Students</p>
            </div>
          </div>
    </div>
  )
}

export default AboutUs