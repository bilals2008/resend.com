// File: app/pricing/Faqs.tsx
import { PricingFaqData } from '@/components/common/FAQs/faqData'
import FAQs from '@/components/common/FAQs/FAQs'
import React from 'react'

function Faqs() {
  return (
    <div className='py-20'>
      <FAQs data={PricingFaqData}/>
   
    </div>
  )
}

export default Faqs