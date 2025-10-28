// File: app/about/page.tsx
import React from 'react'
import AboutIntro from './AboutIntro';
import OurStory from './OurStory';
import OurTeam from './OurTeam';
import BeliefsSection from './BeliefsSection/BeliefsSection';
function page() {
  return (
    <div className="page">
      <AboutIntro />
      <OurStory />
      <OurTeam />
      <BeliefsSection/>
    </div>
  );
}

export default page