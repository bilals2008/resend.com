// File: app/pricing/pricingSection/PricingSection.tsx
import React from 'react'
import { pricingPlans } from './pricingData';
import PricingCard from './PricingCard';

function PricingSection() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={plan.id} plan={plan} isActive={idx === 0} />
        ))}
      </div>
    </div>
  );
}

export default PricingSection