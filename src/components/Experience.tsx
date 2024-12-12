import React from 'react'

const Experience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Experience
        </h2>
        <div className="space-y-12">
          {/* S&P Global */}
          <div className="group">
            <div className="relative pl-8 border-l-4 border-gray-200 group-hover:border-blue-500 transition-colors duration-300">
              <div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[10px] group-hover:bg-blue-500 transition-colors duration-300"></div>
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">S&P Global</h3>
                    <p className="text-lg text-blue-600">Software Engineer Intern</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600 font-medium">New York, NY</p>
                    <p className="text-gray-500">Jun 2024 – Aug 2024</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Automated Python Apache Spark commercial analytics retrieval reducing time spent by 20 hours/week and saving $50,000 annually",
                    "Migrated Spring Boot legacy microservice to 6 commercial environments, reducing deployment time by 40% and integration by 75%",
                    "Optimized ReactJS entitlement system serving 100+ users, reducing access processing by 24 hours and support tickets by 60%",
                    "Developed novel Databricks SQL catalog system consolidating 8 Market Intelligence data sources, serving 100+ weekly queries"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CACI International */}
          <div className="group">
            <div className="relative pl-8 border-l-4 border-gray-200 group-hover:border-blue-500 transition-colors duration-300">
              <div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[10px] group-hover:bg-blue-500 transition-colors duration-300"></div>
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">CACI International</h3>
                    <p className="text-lg text-blue-600">Software Engineer Intern</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600 font-medium">McLean, VA</p>
                    <p className="text-gray-500">May 2023 – Aug 2023</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Created 15 Unity3D testing environments for AI systems, increasing infant intelligence simulation accuracy by 35% across 6 metrics",
                    "Developed 100 JSON and YAML cognition task simulations, enabling analysis of 25 distinct behavioral and spatial patterns",
                    "Optimized 80% of obstacle tasks and test coverage using Python, reducing training time by 45% and lowered weekly bugs by 70%"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Akira Technologies */}
          <div className="group">
            <div className="relative pl-8 border-l-4 border-gray-200 group-hover:border-blue-500 transition-colors duration-300">
              <div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[10px] group-hover:bg-blue-500 transition-colors duration-300"></div>
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Akira Technologies</h3>
                    <p className="text-lg text-blue-600">Data Science Intern</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600 font-medium">Washington, DC</p>
                    <p className="text-gray-500">Jun 2022 – Aug 2022</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Built AWS forecast model analyzing 10 years of California wildfire data across 58 counties, predicting 3-week advance warning",
                    "Assessed and pruned 10 time-series datasets to construct a refined dataset pipeline to enhance accuracy up to 90%",
                    "Demonstrated actionable findings in a comprehensive deliverable in collaboration with AkiraLabs, for the Department of Interior"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* George Washington University */}
          <div className="group">
            <div className="relative pl-8 border-l-4 border-gray-200 group-hover:border-blue-500 transition-colors duration-300">
              <div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[10px] group-hover:bg-blue-500 transition-colors duration-300"></div>
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">George Washington University</h3>
                    <p className="text-lg text-blue-600">Machine Learning Intern</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600 font-medium">Washington, DC</p>
                    <p className="text-gray-500">Jun 2021 – Aug 2021</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Built ML models predicting execution times for 10 Apache OpenWhisk functions cutting cold start latency by 45% and saving $800/month in cloud costs",
                    "Analyzed 1,000+ MariaDB records using Sickit-Learn for feature selection, identifying 8 benign features driving function latency",
                    "Achieved 94.75% prediction accuracy for cloud resource allocation, optimizing costs 0.25 standard deviations below former average"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Texas Convergent Forge Startups */}
          <div className="group">
            <div className="relative pl-8 border-l-4 border-gray-200 group-hover:border-blue-500 transition-colors duration-300">
              <div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-[10px] group-hover:bg-blue-500 transition-colors duration-300"></div>
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Texas Convergent Forge Startups</h3>
                    <p className="text-lg text-blue-600">Software Consultant</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-gray-600 font-medium">Austin, TX</p>
                    <p className="text-gray-500">Feb 2023 – May 2023</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Led 5-person Agile team delivering food-tech startup MVP 2 weeks ahead of schedule, growing MAU from 50 to 200",
                    "Implemented interactive onboarding quiz with Next.js, increasing completion rate from 40% to 70% and reducing bounce rate to 20%",
                    "Engineered Flask recipe customization engine to handle 100 concurrent users with 180ms average response time",
                    "Designed scalable database architecture for personalized health supporting 200+ recipes with 50+ customization options per recipe"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Experience