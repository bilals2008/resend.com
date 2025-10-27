// File: components/ReactEmail/ImageSec.tsx
import Image from 'next/image'
import React from 'react'

function ImageSec() {
  return (
    <div className='w-full flex items-center justify-center my-10'>
        <Image
        src={"/images/Home/ReacEmailSec/ReactEmail.svg"}
        alt='ReactEmail img'
        width={900}
        height={400}
        blurDataURL='data..'
        placeholder='blur'
        />
    </div>
  )
}

export default ImageSec