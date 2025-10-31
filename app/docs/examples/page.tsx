// File: app/docs/examples/page.tsx
import React from 'react'
import ExpTopSection from './ExpTopSection';
import ExapmlesCard from './ExapmlesCard';
import SdkBreadcrum from '../sdks/SdkBreadcrum';
import HelpfulSection from '../components/DocsMain/HelpfulSection';

function page() {
  return <div className="px-2 pb-5">
    <ExpTopSection/>
    <ExapmlesCard/>
    <HelpfulSection/>
    <SdkBreadcrum/>
  </div>;
}

export default page