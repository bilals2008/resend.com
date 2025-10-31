// File: app/docs/examples/ExpTopSection.tsx
import React from 'react'
import { examplesData } from '../data/ExampleData';

function ExpTopSection() {
  return (
    <div>
      <h1 className="text-sm font-semibold text-neutral-400">Resources</h1>

      <div className="py-4 space-y-2">
        <h2 className="text-4xl font-bold">{examplesData.title}</h2>
        <p className="text-neutral-400 text-lg">{examplesData.subtitle}</p>
      </div>
    </div>
  );
}

export default ExpTopSection