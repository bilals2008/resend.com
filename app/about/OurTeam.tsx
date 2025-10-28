// File: app/about/OurTeam.tsx
import ContentSection from '@/components/common/ContentSection'
import { Twitter } from 'lucide-react';
import React from 'react'

function OurTeam() {
  return (
    <div className='py-20'>
      <ContentSection
        imgSrc="/images/About/OurTeam.png"
        imgalt="Our team image"
        imgWidth={800}
        imgHeight={533}
        imgClassName=" rotate-1 hover:scale-95 hover:rotate-6 transition duration-150 order-2"
        heading={"The team behind it"}
        desciption="A fully remote team on a mission to build
the best communication platform for developers."
      />
      <p className="text-sm text-[#F1F7FEB5] text-center font-light flex items-center justify-start md:justify-center gap-1 -mt-12">
        <span className='hidden md:block'>
          <Twitter
            size={16}
          color='#F1F7FEB5'
          />
        </span>
        Some of our team meeting for the first time in-person during a trip to
        Portugal
      </p>
    </div>
  );
}

export default OurTeam