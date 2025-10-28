// File: app/about/BeliefsSection/BeliefsSection.tsx
import TextBlock from '@/components/common/TextBlock'
import React from 'react'
import FeatureCard from './FeatureCard';

function BeliefsSection() {
  return (
    <div className="py-20">
      <TextBlock
        heading="What we believe"
        paragraph="Principles that dictate how we think, behave, and make decisions."
        className="text-center"
        paraClassName="leading-0!"
      />
      <div className='mt-10 relative'>
        <FeatureCard />
      </div>
    </div>
  );
}

export default BeliefsSection