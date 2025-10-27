// File: components/Home/BeyondExpectations/EmailReimaginedSection.tsx
import ContentSection from '@/components/common/ContentSection'
import React from 'react'

export default function EmailReimaginedSection() {
    const heading = <span>Email reimagined.<br/> Available today.</span>;
  return (
    <div>
        <ContentSection heading={heading} 
        btnText={["Get Strted","Contact us"]}
        />
    </div>
  )
}
