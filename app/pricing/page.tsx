// File: app/pricing/page.tsx
import TextBlock from '@/components/common/TextBlock'
import React from 'react'
import TabList from './TabList';
import PricingCard from './PricingCard';
import { pricingPlans } from './pricingData';

function page() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <TextBlock
        heading="Pricing"
        paragraph="Start for free and scale as you grow."
        className="text-center"
      />
      <TabList />
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={plan.id} plan={plan} isActive={idx === 0} />
        ))}
      </div>
    </div>
  );
}

export default page