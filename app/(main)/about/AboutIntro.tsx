// File: app/about/AboutIntro.tsx
import ContentSection from '@/components/common/ContentSection';
import ShiningLine from '@/components/common/ShiningLine';
import React from 'react'
function AboutIntro() {
  return (
    <div className="max-w-5xl mx-auto py-5 ">
      <ContentSection
        imgSrc="/images/About/aboutIntro.png"
        imgalt="aboutIntro image"
        heading="Building the modern
email sending platform"
        headingClassName=" max-w-xs md:leading-10 mb-2"
        desciption={
          "The web has come a long way in the last ten years, but why is email stuck in the past? It doesn't have to be that way. We want to change that. We want to reimagine email."
        }
      />
      <div className="relative">
        <ShiningLine />
      </div>
   
    </div>
  );
}

export default AboutIntro