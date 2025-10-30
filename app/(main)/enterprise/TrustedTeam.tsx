// File: app/(main)/enterprise/TrustedTeam.tsx
import React from 'react'
import CompaniesLogos from '../Home/Companies/CompaniesLogos';

function TrustedTeam() {
  return (
    <div className="py-10">
      <p className='text-muted-foreground text-center py-10'>Trusted by the best engineering teams</p>
      <CompaniesLogos/>
    </div>
  );
}

export default TrustedTeam
