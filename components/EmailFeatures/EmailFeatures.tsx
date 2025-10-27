// File: components/EmailFeatures/EmailFeatures.tsx
import React from 'react'
import TextBlock from '../common/TextBlock'
import ShiningLine from '../common/ShiningLine';
import EmailFeatureList from './EmailFeatureList';

function EmailFeatures() {
  return (
    <div className='max-w-5xl mx-auto px-2 py-10 border-t relative'>
        <ShiningLine/>
      <TextBlock heading={<span>Reach humans,<br/>not spam folders</span>} />
      <EmailFeatureList/>
    </div>
  );
}

export default EmailFeatures