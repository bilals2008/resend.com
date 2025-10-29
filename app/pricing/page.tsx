// File: app/pricing/page.tsx
import TextBlock from '@/components/common/TextBlock'
import React from 'react'
import TabList from './TabList';
import Addon from './Addon';
import PricingSection from './pricingSection/PricingSection';
import Trrusted from './Trrusted';

function page() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <TextBlock
        heading="Pricing"
        paragraph="Start for free and scale as you grow."
        className="text-center"
      />
      <TabList />
      <PricingSection/>
     <Addon/>
     <Trrusted/>
    </div>
  );
}

export default page