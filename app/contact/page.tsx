import { Mail, MapPin } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='bg-slate-900 min-w-full h-screen'>
        <div className='container mx-auto py-20 '>
            <div className='bg-slate-700 z-10 rounded-xl shadow-lg w-[400px] lg:w-1/2 h-1/2 text-gray-300 p-10 space-y-5 text-center inline-block'>
                <h1 className='text-4xl font-bold'>Contact Info</h1>
                <p>Feel free to email me with any questions</p>
                <div className='flex flex-row text-left space-x-2'>
                    <Mail/>
                    <p className='font-semibold'>Email: </p>
                    <p className='font-light'>Brett.Linseman@gmail.com</p>
                </div>
                <div className='flex flex-row text-left space-x-2'>
                    <MapPin/>
                    <p className='font-semibold'>Location: </p>
                    <p className='font-light'>Toronto Area, Canada</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage