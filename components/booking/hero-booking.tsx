import Image from 'next/image'
import React from 'react'
import HeroCard from './hero-card'
//import Background from './mjl-16.png';


/* var sectionStyle = {
  width: "100%",
  height: "400px", 
  backgroundImage: "url(" + { Background } + ")"
}; */

type Props = {}

const HeroBooking = (props: Props) => {
  return (
    <div className='h-[400px] w-full flex flex-col items-center relative py-20 bg-white'>
      <div > {/* style={ sectionStyle } */}
      {/* <Image
          src="/assets/images/mjl-16.png"
          alt="logo"
          width={20}
          height={20}
          className=''
        /> */}

      </div>
        <Image
          src="/assets/icons/logo-icon-gr.svg"
          alt="logo"
          width={150}
          height={150}
          className=''
        />
        <div className='mx-20 md:mx-auto md:max-w-3xl space-y-5'>
          <h1 className='text-[#1D263B] text-center text-5xl font-black'>
            Fitness For <span className='text-[#357137]'>Every</span> Body
          </h1>
          <p className='text-[#1D263B] text-center'>
            Redefine your limits and transform your health through movement. Trust Matt Lewis at Major Joint Locomotion Fitness to help you reach your fitness and health goals
          </p>
        </div>
        
        {/* <div className='absolute translate-y-72 mx-20'>
          <HeroCard/>
        </div> */}
    </div>
  )
}

export default HeroBooking