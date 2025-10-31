// File: app/docs/sdks/SDKTopSection.tsx
import React from 'react'
import { sdksData } from '../data/sdksData';

function SDKTopSection() {
    const {title,subtitle} = sdksData
  return (
    <div>
      <h1 className="text-sm font-semibold text-neutral-400">Resources</h1>

      <div className="py-4 space-y-2">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-neutral-400 text-lg">{subtitle}</p>
      </div>
    </div>
  );
}

export default SDKTopSection
