import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <Image
              className='h-8 w-auto'
              src='/mark.svg'
              alt='Tailwind Logo'
              width={500}
              height={500}
            />
          </a>
        </div>
      )
}

export default Logo

