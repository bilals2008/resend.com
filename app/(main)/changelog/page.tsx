// File: app/changelog/page.tsx
import React from 'react'
import ChangelogItem from './ChangelogItem';

function page() {
  return (
    <div className="max-w-5xl mx-auto py-6 px-2">
    <div className='text-center ml-2 pb-3 text-2xl'>Changelog</div>
    <ChangelogItem/>
    </div>
  );
}

export default page