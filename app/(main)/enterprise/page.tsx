// File: app/(main)/enterprise/page.tsx
import React from 'react'
import EnterPriseHero from './EnterPriseHero/EnterPriseHero'
import PartnershipSection from './PartnershipSection'
import TrustedTeam from './TrustedTeam'
import EnterpriseSecurity from './EnterpriseSecurity/EnterpriseSecurity'

function page() {
  return (
    <div className='max-w-5xl mx-auto py-20'>
        <EnterPriseHero/>
        <PartnershipSection/>
        <div className='w-full h-40 py-10'></div>
        <TrustedTeam/>
        <EnterpriseSecurity/>
    </div>
  )
}

export default page