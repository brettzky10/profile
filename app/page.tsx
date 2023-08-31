
import Footer from '@/components/landing/footer'
import { HeroBoxes } from '@/components/landing/hero-boxes'
import { Projects } from '@/components/landing/projects'
import { Stack } from '@/components/landing/stack'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { Poppins } from "next/font/google";
import { cn } from '@/lib/utils'


const font = Poppins({ weight: '600', subsets: ['latin'] });

const LandingPage = () => {
  return (
    <div className='bg-slate-900 h-full w-full'>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
    <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <HeroBoxes />
      <div className='z-30 shadow-xl'>
        <Avatar>
          <AvatarImage src="/avatar-1.png" sizes='lg'/>
          <AvatarFallback>BL</AvatarFallback>
        </Avatar>
      </div>
      <h1 className='text-[#73746f] font-bold text-6xl py-10 z-30'>Brett Linseman</h1>
      <p className="text-center mt-2 text-[#73746f] relative z-20">
        Making magical experiences, one code snippet at a time...
      </p>
    </div>
      <div className='bg-gradient-to-b from-slate-900 from-40% via-slate-700 to-sky-700 to-90% h-[300px] w-full shadow-xl opacity-25 place-content-center'>
        <Stack/>
      </div>
      <div className='flex flex-col items-center container mx-auto'>
        <h1 className='text-[#73746f] font-bold text-5xl pt-20 pb-10 '>Projects</h1>
        <Projects/>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage