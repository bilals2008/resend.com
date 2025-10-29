// File: components/Home/BeyondExpectations/BeyondExpectations.tsx
import ContentSection from '@/components/common/ContentSection';
import ShiningLine from '@/components/common/ShiningLine';
import React from 'react'
import EmailReimaginedSection from './EmailReimaginedSection';
import Image from 'next/image';

function BeyondExpectations() {
  return (
    <div className="-mb-7 md:-mb-10 mx-auto max-w-5xl relative ">
      <ShiningLine />
      <ContentSection
        heading="Beyond Expectations"
        desciption="Resend is driving remarkable developer experiences that enable success
stories, empower businesses, and fuel growth across industries and individuals."
      />
      <div className="w-full h-44"></div>
      <EmailReimaginedSection />
      <div className="relative mt-20 shadow-[inset_0px_0px_39px_54px_#000000]">
        <ShiningLine />
        <Image
          src={"/images/Home/resend-img.png"}
          alt="Resend banner"
          width={1000}
          height={200}
        />
        <div className="">
          <ShiningLine />
        </div>
      </div>
    </div>
  );
}

export default BeyondExpectations