// File: components/IntegrateLang/IntegrateLangs.tsx
import React from 'react'
import ContentSection from '../common/ContentSection'
import LangList from './LangList';
import CodeBlock from './CodeBlock/CodeBlock';

function IntegrateLangs() {
  return (
    <div className="py-10 max-w-5xl mx-auto">
      <ContentSection />
      <LangList />
      <CodeBlock/>
    </div>
  );
}

export default IntegrateLangs