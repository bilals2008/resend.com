// File: app/security/SecurityControl.tsx
import ContentSection from '@/components/common/ContentSection'
import React from 'react'
import SecurityCard from './SecurityCard';

function SecurityControl() {
  return (
    <>
      <div className="py-10">
        <ContentSection
          heading="Security Controls"
          desciption="With industry best practices, third-party auditors, and a collection of operational
controls, Resend is committed to the safety and confidentiality of your data."
        />
      </div>
      <SecurityCard />
    </>
  );
}

export default SecurityControl