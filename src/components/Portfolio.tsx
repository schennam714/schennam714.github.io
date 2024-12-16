import React, { useState } from 'react'
import Image from 'next/image'

const Portfolio = () => {
  const [activeImages, setActiveImages] = useState<{ [key: number]: number }>({})

  const handleImageChange = (projectIdx: number, direction: 'next' | 'prev') => {
    setActiveImages(prev => {
      const currentIndex = prev[projectIdx] || 0
      const numImages = projects[projectIdx].images.length
      
      let newIndex
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % numImages
      } else {
        newIndex = (currentIndex - 1 + numImages) % numImages
      }
      
      return {
        ...prev,
        [projectIdx]: newIndex
      }
    })
  }

  const projects = [
    {
      title: "CurveCracker",
      link: "https://github.com/schennam714/CurveCracker",
      description: `CurveCracker is an innovative analytics platform designed to address a common challenge faced by UT Austin students in curved-grading courses. 
      The platform provides a secure and anonymous way for students to share and compare their performance across different courses, 
      helping them better understand their standing and course dynamics. With features like anonymous grade submission and 
      cross-class analytics, CurveCracker transforms isolated grade data into meaningful insights that help students make 
      informed decisions about their academic journey.`,
      images: ["/images/curve_cracker.png"],
      tech: ["TypeScript", "Node.js", "Next.js", "MongoDB", "TailwindCSS"],
      bgColor: "from-blue-500 to-indigo-500"
    },
    {
      title: "AI Games Collection",
      link: "https://github.com/schennam714/AI",
      description: `A comprehensive collection of AI-powered classic games and solvers that showcase different artificial intelligence 
      approaches. The collection includes an advanced Sudoku solver capable of tackling complex puzzles, an intelligent TicTacToe 
      implementation featuring both AI vs. AI and Human vs. AI modes, and sophisticated game-playing agents for games like Isolation. 
      Each game demonstrates various AI concepts including adversarial search, constraint satisfaction, and heuristic evaluation.`,
      images: [
        "/images/isolation_game.png",
        "/images/map_search.png",
        "/images/sudoku.png",
        "/images/tic_tac_toe.png"
      ],
      tech: ["Python", "AI Algorithms", "Dynamic Programming", "Constraint Programming"],
      bgColor: "from-green-500 to-teal-500"
    },
    {
      title: "COVIDSeek",
      link: "https://github.com/schennam714/covidseek",
      videoDemo: "https://youtu.be/SZu8ZtmeFPg",
      description: `COVIDSeek is a comprehensive web application developed during the height of the COVID-19 pandemic to provide 
      real-time visualization and analysis of pandemic data. The platform features an interactive heatmap showing infection density 
      across different regions, along with predictive analytics to forecast potential trends. By combining accurate data visualization 
      with predictive modeling, COVIDSeek helps users understand both the current state and potential future developments of the 
      pandemic at a state-by-state level.`,
      images: ["/images/covidseek1.png", "/images/covidseek2.png"],
      tech: ["HTML", "CSS", "Flask", "Python"],
      bgColor: "from-orange-300 to-pink-300"
    },
    {
      title: "Operating System",
      link: "",
      description: `A comprehensive enhancement of a toy operating system that demonstrates core OS concepts and implementations. 
      The project focused on implementing essential operating system features including advanced priority-based process scheduling, 
      sophisticated virtual memory management, and robust argument passing mechanisms. The system supports over 15 multithread system 
      calls, enabling efficient concurrent operations. This project provided hands-on experience with fundamental OS concepts and system-level programming.`,
      images: [],
      tech: ["C", "Linux", "System Programming", "Concurrent Programming"],
      bgColor: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Featured Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`bg-gradient-to-r ${project.bgColor} px-6 py-4`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-4">
                    {project.title}
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </a>
                    )}
                  </h3>
                </div>
              </div>

              <div className={`p-6 ${project.images.length === 0 ? 'max-w-3xl mx-auto' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}`}>
                {project.images.length > 0 && (
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md group">
                    {project.images.map((img, imgIdx) => (
                      <Image
                        key={imgIdx}
                        src={img}
                        alt={`${project.title} screenshot ${imgIdx + 1}`}
                        fill
                        className={`object-contain transition-opacity duration-500 ${
                          imgIdx === (activeImages[idx] || 0) ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                    
                    {project.images.length > 1 && (
                      <>
                        {/* Left Arrow */}
                        <button
                          onClick={() => handleImageChange(idx, 'prev')}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 
                                   text-white p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                          aria-label="Previous image"
                        >
                          <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        {/* Right Arrow */}
                        <button
                          onClick={() => handleImageChange(idx, 'next')}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 
                                   text-white p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
                          aria-label="Next image"
                        >
                          <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        {/* Optional: Image counter */}
                        <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                          {(activeImages[idx] || 0) + 1} / {project.images.length}
                        </div>
                      </>
                    )}
                  </div>
                )}
                
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700
                                 hover:bg-blue-100 hover:text-blue-700 
                                 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio