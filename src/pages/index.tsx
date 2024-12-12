import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shreyas R. Chennamaraja - Portfolio</title>
        <meta name="description" content="Software Engineer & Data Scientist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}