// File: components/Home/AnalyticsControl/AnalyticsControl.tsx
import ContentSection from '@/components/common/ContentSection'
import React from 'react'
import AnalyticysTab from './AnalyticysTab';
import AnalyticsImgae from './AnalyticsImgae';

function AnalyticsControl() {
  return (
    <div className="py-10 my-20 mx-auto max-w-5xl">
      <ContentSection
        imgSrc="/images/Home/AnalyticSect/Analytic-logo.jpg"
        heading="Everything in your control"
        desciption="All the features you need to manage your email sending, troubleshoot with detailed logs, and protect your domain reputation  without the friction."
      />
      <AnalyticysTab />
      <AnalyticsImgae/>
    </div>
  );
}

export default AnalyticsControl