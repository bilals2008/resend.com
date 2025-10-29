// File: app/security/ReportBug.tsx
import ContentSection from '@/components/common/ContentSection';
import React from 'react'

function ReportBug() {
  return (
    <div className="py-10">
      <ContentSection
        heading="Responsible Disclosure"
        desciption="We value the inputs from the community to help us detect vulnerabilities. If you believe
you have found a security vulnerability, please follow the instructions to report it."
        btnText={["Report Vulnerability"]}
        btn1ClassName="-mt-7"
      />
    </div>
  );
}

export default ReportBug