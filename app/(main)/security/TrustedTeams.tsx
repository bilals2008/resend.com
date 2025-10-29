// File: app/security/TrustedTeams.tsx
import React from 'react'
import CompaniesLogos from '../Home/Companies/CompaniesLogos';

function TrustedTeams() {
  return (
    <div className="py-20">
      <h6 className="text-center text-muted-foreground text-sm py-10">
        Trusted by the best engineering teams
      </h6>
      <CompaniesLogos/>
    </div>
  );
}

export default TrustedTeams