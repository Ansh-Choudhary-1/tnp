import React from 'react'

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="absolute inset-0 bg-dotted-pattern bg-dot-lg opacity-100 pointer-events-auto"></div>
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-gray-900">
                Excellence in
                <span className="block text-primary">Engineering</span>
                <span className="block text-primary">Education</span>
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-blue-600">300+</h3>
                <p className="text-gray-600">Global Recruiting Partners</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-purple-600">80%++</h3>
                <p className="text-gray-600">Batch Placed in 2024</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-pink-600">₹1Cr</h3>
                <p className="text-gray-600">Highest Package</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-4xl font-bold text-blue-600">1500+</h3>
                <p className="text-gray-600">Students</p>
              </div>
            </div>
          </div>

          {/* Rankings Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-200">College Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <span className="text-[150px] font-bold text-gray-100 opacity-20">Rankings</span>
              </div>
              <div className="text-center relative bg-white p-6 rounded-lg shadow-lg">
                <div className="absolute -top-3 -left-3 text-9xl font-bold text-gray-100 opacity-20 pointer-events-none">
                  8
                </div>
                <p className="font-semibold relative z-10">India Today Colleges 2024</p>
                <p className="text-gray-600 relative z-10">Rank 8</p>
              </div>
              <div className="text-center relative bg-white p-6 rounded-lg shadow-lg">
                <div className="absolute -top-3 -left-3 text-9xl font-bold text-gray-100 opacity-20 pointer-events-none">
                  57
                </div>
                <p className="font-semibold relative z-10">NIRF India Rankings 2024: Engineering</p>
                <p className="text-gray-600 relative z-10">Rank 57</p>
              </div>
              <div className="text-center relative bg-white p-6 rounded-lg shadow-lg">
                <div className="absolute -top-3 -left-3 text-9xl font-bold text-gray-100 opacity-20 pointer-events-none">
                  25
                </div>
                <p className="font-semibold relative z-10">NIRF India Rankings 2023: UNIVERSITY</p>
                <p className="text-gray-600 relative z-10">Rank 25</p>
              </div>
              <div className="text-center relative bg-white p-6 rounded-lg shadow-lg">
                <div className="absolute -top-3 -left-3 text-9xl font-bold text-gray-100 opacity-20 pointer-events-none">
                  5
                </div>
                <p className="font-semibold relative z-10">ARIIA Ranking 2020</p>
                <p className="text-gray-600 relative z-10">Rank 5</p>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default Home