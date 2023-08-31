import React from 'react'
import IconJavascript from './icons/icon-javascript'
import IconTypescript from './icons/icon-typescript'
import IconPrisma from './icons/icon-prisma'
import IconPostgresql from './icons/icon-postgresql'
import IconPlanetscale from './icons/icon-planetscale'
import IconFlutter from './icons/icon-flutter'
import IconNuxtjs from './icons/icon-nuxt'
import IconArduino from './icons/icon-arduino'
import IconOpenai from './icons/icon-openai'
import IconReact from './icons/icon-react'

export const Stack = () => {
  return (
    <div className='container mx-auto space-y-10 columns-1 flex flex-col items-center pt-20'>
        
            <div className='space-x-10 lg:space-x-20 flex flex-row'>
            <IconJavascript className="text-[#73746f]" width='50px' height='50px'/>
            <IconReact className="text-[#73746f]" width='50px' height='50px'/>
            <IconFlutter className="text-[#73746f]" width='50px' height='50px'/>
            <IconNuxtjs className="text-[#73746f]" width='50px' height='50px'/>
            <IconTypescript className="text-[#73746f]" width='50px' height='50px'/>
            </div>
        
        
        <div className='space-x-10 lg:space-x-20 flex flex-row'>
            <IconPrisma className="text-[#73746f]" width='50px' height='50px'/>
            <IconPostgresql className="text-[#73746f]" width='50px' height='50px'/>
            <IconPlanetscale className="text-[#73746f]" width='50px' height='50px'/>
            <IconArduino className="text-[#73746f]" width='50px' height='50px'/>
            <IconOpenai className="text-[#73746f]" width='50px' height='50px'/>
        </div>
        
    </div>
    
    
  )
}
