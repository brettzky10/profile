import About from '@/components/about'
import Contact from '@/components/contact'
import SectionDivider from '@/components/divider'
import Experience from '@/components/experience'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import React from 'react'

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects/>
      <SectionDivider />
      <Skills/>
      <SectionDivider />
      <Experience />
      <Contact />
    </main>
  )
}

export default Home