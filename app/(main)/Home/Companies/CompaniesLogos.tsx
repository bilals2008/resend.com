// File: components/Companies/Logos.tsx
import React from 'react'
import { logos } from './logos';
import Image from 'next/image';

function CompaniesLogos() {
  // const logs = Array.from({ length: 12 }).map(
  //   (_, i) => `/images/companies/logo-${i + 1}.png`
  // ); 
  // console.log(logs);
  
  return (
    <div className='max-w-5xl p-1 mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5'>
      {logos.map((logo,idx) => {
        return(
          <div key={idx} className='p-2 flex items-center justify-center'>
            <Image
            src={logo.src}
            width={100}
            height={100}
            alt={logo.alt}
            placeholder='blur'
            blurDataURL='data...'
            />
          </div>
        )
      })}
    </div>
  )
}

export default CompaniesLogos;