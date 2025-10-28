// File: app/about/OurInvestors/OverInvestors.tsx
import TextBlock from '@/components/common/TextBlock'
import React from 'react'
import InvestorCard from './InvestorCard';

function OverInvestors() {
  return (
    <div className="py-20 max-w-5xl mx-auto">
      <TextBlock
        heading="Backed by incredible investors"
        paragraph="We are fortunate to work with some of the best investors in the world.
Chances are you are already using the products they helped to create."
paraClassName='max-w-xl leading-5!'
      />
      <InvestorCard/>
    </div>
  );
}

export default OverInvestors