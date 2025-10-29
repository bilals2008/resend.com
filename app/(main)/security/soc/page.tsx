// File: app/security/soc/page.tsx
import ContentSection from '@/components/common/ContentSection'
import React from 'react'
import SOC2Card from './SOC2Card';

function page() {
  return (
    <div className="pb-20 pt-5">
      <ContentSection heading="SOC 2" headingClassName='text-5xl mb-2' desciption="Resend is SOC 2 Type II compliant.
We partner with third-party firms to conduct regular audits."/>

<SOC2Card/>
    </div>
  );
}

export default page