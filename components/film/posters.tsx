import Image from 'next/image'
import React from 'react'

const Posters = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-6'>
        <Image
            src={'/posters/it.jpg'}
            alt='It'
            height={300}
            width={100}
        />
        <Image
            src={'/posters/handmaidstale.jpg'}
            alt='Handmaids'
            height={300}
            width={100}
        />
        <Image
            src={'/posters/theboys.jpg'}
            alt='the Boys'
            height={300}
            width={100}
        />
        <Image
            src={'/posters/see.jpg'}
            alt='See'
            height={300}
            width={100}
        />
        <Image
            src={'/posters/startrek.jpg'}
            alt='Star Trek'
            height={300}
            width={100}
        />
        <Image
            src={'/posters/umbrella.jpg'}
            alt='Umbrella'
            height={300}
            width={100}
        />
    </div>
  )
}

export default Posters