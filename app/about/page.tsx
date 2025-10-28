// File: app/about/page.tsx
import React from 'react'
import AboutIntro from './AboutIntro';
import OurStory from './OurStory';
import OurTeam from './OurTeam';
import BeliefsSection from './BeliefsSection/BeliefsSection';
import OpenPositions from './OpenPositions';
import OverInvestors from './OurInvestors/OverInvestors';
function page() {
  return (
    <div className="page">
      <AboutIntro />
      <OurStory />
      <OurTeam />
      <BeliefsSection/>
      <OpenPositions/>
      <OverInvestors/>
    </div>
  );
}

export default page