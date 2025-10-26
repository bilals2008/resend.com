// File: components/IntegrateLang/IntegrateLangs.tsx
import React from 'react'
import ContentSection from '../common/ContentSection'
import LangList from './LangList';

function IntegrateLangs() {
  return (
    <div className="py-10 max-w-5xl mx-auto">
      <ContentSection/>
      <LangList/>
    </div>
  );
}

export default IntegrateLangs