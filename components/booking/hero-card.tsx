import React from 'react'
//import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Bungee } from "next/font/google";
import { Button } from '../ui/button';

const font = Bungee({ subsets: ["latin"], weight: "400" });

type Props = {}

const HeroCard = (props: Props) => {
  return (
        
            <div className='flex flex-col md:flex-row roundeded-xl'> 
                <div className=''>
                <img
                    src="/assets/images/mjl-11.jpg"
                    alt="plank"
                    className='object-cover '
                />
                </div>
                <div className='md:w-1/3 px-5 space-y-4 flex flex-col py-5'>
                    <h3 className={font.className}>
                        Your Journey To Pain-Free Living Starts Here
                    </h3>
                    <p className='text-sm'>
                    The personal training program that we offer is focused on a five-step program to get your joints moving especially if you have acute and chronic pain. Major Joint Locomotion is our philosophy. If you take care of your joints and get them all working in unison, you will have less pain.
                    </p>
                    <Button className='' size={"lg"}>
                        Book with Trainer Matt
                    </Button>
                </div>
               <div className='md:w-1/3 relative '>
                <Image
                        src="/assets/images/mjl.png"
                        alt="mjl"
                        layout='fill'
                    objectFit='contain'
                    className=''
                    />
               </div>
           
        </div>
  )
}

export default HeroCard