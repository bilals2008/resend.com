// File: components/Home/AnalyticsControl/AnalyticsImgae.tsx
import Image from 'next/image'
import React from 'react'

function AnalyticsImgae() {
  return (
    <div className='w-full flex items-center justify-center mt-4 mb-10'>
      <Image
      src={'/images/Home/AnalyticSect/analytics-img.png'}
      alt='Analytic image'
        width={850}
        height={800}
      
      />
    </div>
  )
}

export default AnalyticsImgae
