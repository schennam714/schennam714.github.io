import React from 'react'
import Image from 'next/image'

const Experience = () => {
  const experiences = [
    {
      company: "Palantir",
      role: "Winter Defense Tech Fellow",
      location: "Remote",
      period: "Dec 2024 - Present",
      logo: "/images/palantir.jpeg",
      points: [
        "Architected and implemented an automated military briefing system leveraging Retrieval-Augmented Generation, reducing cultural intelligence preparation time by 70% while maintaining contextual accuracy through optimized text chunking and vector embeddings",
        "Led end-to-end development of a proof-of-concept intelligence tool for defense briefings, enabling instant retrieval of travel logistics",
        "Selected as a finalist from ~100 fellows to present demo next month onsite"
      ]
    },
    {
      company: "S&P Global",
      role: "Software Engineer Intern",
      location: "New York, NY",
      period: "Jun 2024 – Aug 2024",
      logo: "/images/s&p.jpeg",
      points: [
        "Automated Python Apache Spark commercial analytics retrieval reducing time spent by 20 hours/week and saving $50,000 annually",
        "Migrated Spring Boot legacy microservice to 6 commercial environments, reducing deployment time by 40% and integration by 75%",
        "Optimized ReactJS entitlement system serving 100+ users, reducing access processing by 24 hours and support tickets by 60%",
        "Developed novel Databricks SQL catalog system consolidating 8 Market Intelligence data sources, serving 100+ weekly queries"
      ]
    },
    {
      company: "CACI International",
      role: "Software Engineer Intern",
      location: "McLean, VA",
      period: "May 2023 – Aug 2023",
      logo: "/images/caci.jpeg",
      points: [
        "Created 15 Unity3D testing environments for AI systems, increasing infant intelligence simulation accuracy by 35% across 6 metrics",
        "Developed 100 JSON and YAML cognition task simulations, enabling analysis of 25 distinct behavioral and spatial patterns",
        "Optimized 80% of obstacle tasks and test coverage using Python, reducing training time by 45% and lowered weekly bugs by 70%"
      ]
    },
    {
      company: "Akira Technologies",
      role: "Data Science Intern",
      location: "Washington, DC",
      period: "Jun 2022 – Aug 2022",
      logo: "/images/akira.jpeg",
      points: [
        "Built AWS forecast model analyzing 10 years of California wildfire data across 58 counties, predicting 3-week advance warning",
        "Assessed and pruned 10 time-series datasets to construct a refined dataset pipeline to enhance accuracy up to 90%",
        "Demonstrated actionable findings in a comprehensive deliverable in collaboration with AkiraLabs, for the Department of Interior"
      ]
    },
    {
        company: "George Mason University",
        role: "Computer Vision Research Intern",
        location: "Fairfax, VA",
        period: "Jun 2021 – Aug 2021",
        logo: "/images/gm.jpeg",
        points: [
          "Worked as a research intern, utilized Intel RealSense Depth Camera to record and visualize 12 different camera positions of a seated driver",
          "Employed the OpenFace GUI, an open-source FaceNet toolkit to assess facial recognition algorithms and software and test use cases of driver position. ",
          "Derived conclusions about driver safety through implementing real-time integrated Computer Vision models to classify attention of the driver in relation to movement and operations of the car, through specific algorithms of Object Tracking and Image Segmentation through OpenFace models."
        ]
      },
      {
        company: "George Washington University",
        role: "Machine Learning Intern",
        location: "Washington, DC",
        period: "Jun 2020 – Aug 2020",
        logo: "/images/gwu.jpeg",
        paper: "/papers/gwu_research.pdf", // Add this line
        points: [
          "Built ML models predicting execution times for 10 Apache OpenWhisk functions cutting cold start latency by 45% and saving $800/month in cloud costs",
          "Analyzed 1,000+ MariaDB records using Sickit-Learn for feature selection, identifying 8 benign features driving function latency",
          "Achieved 94.75% prediction accuracy for cloud resource allocation, optimizing costs 0.25 standard deviations below former average"
        ]
      }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group">
              <div className="relative pl-8 border-l-4 border-gray-200 group-hover:border-blue-500 transition-colors duration-300">
                <div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[10px] group-hover:bg-blue-500 transition-colors duration-300"></div>
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                        <p className="text-lg text-blue-600">{exp.role}</p>
                      </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-600 font-medium">{exp.location}</p>
                      <p className="text-gray-500">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Add paper button if available */}
                  {exp.paper && (
                    <div className="mt-4">
                      <a
                        href={exp.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg
                                 hover:bg-blue-100 transition-colors duration-300 group"
                      >
                        <svg 
                          className="w-5 h-5 mr-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        View Research Paper
                        <svg 
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience