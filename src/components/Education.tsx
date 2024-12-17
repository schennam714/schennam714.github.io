import React from 'react'
import Image from 'next/image'

const Education = () => {
  const courses = [
    "C++ Object Oriented Programming",
    "Software Engineering",
    "Operating Systems",
    "Matrices/Matrix Calculations",
    "Computer Architecture",
    "Data Structures",
    "Data Science for Business Applications",
    "Probability and Statistics",
    "Financial Accounting"
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Education
        </h2>

        <div className="space-y-8">
          {/* University */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div className="flex-1 flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src="/images/UT.jpeg"
                      alt="UT Austin logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                      The University of Texas at Austin
                    </h3>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                        </svg>
                        <span>Bachelor of Science in Computer Science</span>
                      </div>
                      <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                        </svg>
                        <span>Bachelor of Science in Business Administration</span>
                      </div>
                      {/* <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                        <span>Minor in Business Administration</span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end">
                  <div className="text-gray-600 font-medium">Austin, TX</div>
                  <div className="text-blue-600">Aug 2022 – May 2026</div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Relevant Coursework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {courses.map((course, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 px-4 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 mt-6">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span className="text-sm">Expected Graduation: May 2026</span>
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div className="flex-1 flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src="/images/TJ.jpeg"
                      alt="TJHSST logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                      Thomas Jefferson High School for Science and Technology
                    </h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                        </svg>
                        <span>GPA: 4.3</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end">
                  <div className="text-gray-600 font-medium">Alexandria, VA</div>
                  <div className="text-blue-600">2018 – 2022</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Attended the nation's top-ranked public high school, recognized by U.S. News & World Report 
                    as the #1 high school in the United States in both 2021 and 2022.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
                <span className="text-sm">Specialized STEM curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education 