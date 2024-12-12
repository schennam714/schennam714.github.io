import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  const projects = [
    {
      title: "CurveCracker",
      link: "https://github.com/schennam714/CurveCracker",
      description: "Grade analytics platform for UT Austin students to compare performance in curved-grading courses",
      points: [
        "Architected full-stack grade analytics platform serving 40+ UT Austin students across 100+ courses using Typescript and Node.js",
        "Solved critical information-sharing barriers in curved courses through innovative anonymous submission architecture, transforming isolated grade data into actionable cross-class insights",
        "Organized successful beta launch with 40 users and strategized scaling to 80+ users post-launch, achieving 50% growth MoM",
        "Enhanced data reliability and management, reducing data retrieval latency by 40% and engagement without system slowdowns"
      ],
      tech: ["TypeScript", "Node.js", "Next.js", "MongoDB", "TailwindCSS"],
      bgColor: "from-blue-500 to-indigo-500"
    },
    {
      title: "Operating System",
      description: "Enhanced toy OS with advanced system features",
      points: [
        "Enhanced toy OS with priority scheduling, virtual memory management, argument passing, and 15+ multithread system calls",
        "Transformed file system into multi-level indexed file system, increasing I/O throughput and enabling concurrent file workloads"
      ],
      tech: ["C++", "Linux", "System Programming"],
      bgColor: "from-purple-500 to-pink-500"
    },
    {
        title: "AI Games Collection",
        link: "https://github.com/schennam714/AI",
        description: "Collection of AI-powered classic games and solvers",
        points: [
          "Developed SudokuSolver, a high-performance program that efficiently solves 100+ variations of sudoku problems in mere seconds",
          "Engineered an autonomous version of TicTacToe that facilitates AI vs. AI or Human vs AI gameplay",
          "Utilized Constrained-Search Programming and dynamic programming principles to streamline speed of algorithms by 150%"
        ],
        tech: ["Python", "AI Algorithms", "Dynamic Programming", "Constraint Programming"],
        bgColor: "from-green-500 to-teal-500"
    },
    {
        title: "COVIDSeek",
        link: "https://github.com/schennam714/covidseek",
        videoDemo: "https://youtu.be/SZu8ZtmeFPg",
        description: "Heatmap during the COVID-19 pandemic",
        points: [
          "Built a web application that connects people and healtchare systems through accurate information, and predictive analytics",
          "Provides an accurate visualization and predictions/forecasts of the pandemic through a density heatmap and significant updates per state through a tracker."
        ],
        tech: ["HTML", "CSS", "Flask", "Python"],
        bgColor: "from-orange-300 to-pink-300"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`bg-gradient-to-r ${project.bgColor} px-6 py-4`}>
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white flex gap-4 mt-2">
                    {project.title}
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block ml-2 hover:opacity-80 transition-opacity"
                      >
                        <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {project.videoDemo && (
                        <a 
                        href={project.videoDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white hover:opacity-80 transition-opacity"
                        title="Watch Demo on YouTube"
                        >
                        <svg viewBox="0 0 24 24" className="w-7 h-7">
                            <rect width="22" height="16" x="1" y="4" rx="3" fill="#FF0000"/>
                            <path d="M9.5 7.5v9l7-4.5-7-4.5z" fill="white"/>
                        </svg>
                      </a>
                    )}  
                  </h3>
                </div>
                <p className="text-gray-100 mt-2">
                  {project.description}
                </p>
              </div>

              <div className="px-6 py-4">
                <ul className="space-y-2">
                  {project.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio