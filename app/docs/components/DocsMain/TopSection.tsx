// File: app/docs/components/DocsMain/TopSection.tsx
import React from 'react'
import { introductionData } from '../../data/docsContent';

function TopSection() {
     const { title, subtitle } = introductionData;
  return (
    <div>
      <h1 className="text-sm font-semibold text-neutral-400">Documentation</h1>

      <div className="py-4 space-y-2">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-neutral-400 text-lg">{subtitle}</p>
      </div>
    </div>
  );
}

export default TopSection
