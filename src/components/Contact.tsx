import React from 'react'

const Contact = () => {
  const contactMethods = [
    {
      name: "Email",
      value: "shreyas.chennamaraja@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      href: "mailto:shreyas.chennamaraja@gmail.com"
    },
    {
      name: "GitHub",
      value: "github.com/schennam714",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: "https://github.com/schennam714"
    },
    {
      name: "Phone",
      value: "(703) 869 - 6518",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      href: "tel:+17038696518"
    },
    {
      name: "Location",
      value: "Austin, Texas",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Get In Touch
        </h2>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactMethods.map((method, idx) => (
                <div 
                  key={idx}
                  className="flex items-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    {method.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      {method.name}
                    </h3>
                    {method.href ? (
                      <a 
                        href={method.href}
                        target={method.name === "GitHub" ? "_blank" : undefined}
                        rel={method.name === "GitHub" ? "noopener noreferrer" : undefined}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Message */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 leading-relaxed">
                I'm always interested in hearing about new opportunities, 
                collaborations, and exciting projects. Feel free to reach out 
                through any of the contact methods listed here.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:shreyas.chennamaraja@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg
                           hover:bg-blue-700 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact