// File: components/EmailFeatures/EmailFeatures.tsx
import React from 'react'
import ShiningLine from '../../../components/common/ShiningLine.tsx';
import EmailFeatureList from './EmailFeatureList';
import TextBlock from '../../../components/common/TextBlock.tsx'
function EmailFeatures() {
  return (
    <div className="max-w-5xl mx-auto px-2 py-10 border-t  relative mt-56 mb-10">
      <ShiningLine />
      <TextBlock
        heading={
          <span className="">
            Reach humans,
            <br />
            not spam folders
          </span>
        }
        headerClassName="text-center md:text-left"
      />
      <EmailFeatureList />
    </div>
  );
}

export default EmailFeatures