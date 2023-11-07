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
      <div className="absolute inset-x-0 bottom-60 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">

      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
      />
      </div>
      
      <SectionDivider />
      <Skills/>
          
          <svg
            viewBox='0 0 1208 1024'
            className='absolute top-500 left-1/2 -z-10 h-[200rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0'
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#radial-gradient-pricing)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor='#7775D6'/>
                <stop offset={1} stopColor='#E935C1'/>
              </radialGradient>
            </defs>
          </svg>
        
      <SectionDivider />
      <Experience />
      <Contact />
    </main>
  )
}

export default Home