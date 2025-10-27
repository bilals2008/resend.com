// File: components/Footer/FooterBottom.tsx
import React from 'react'
import ShiningLine from '../common/ShiningLine';

function FooterBottom() {
  return (
    <div className="  mt-12 pt-6 text-sm text-center text-gray-600 relative">
      <ShiningLine />© {new Date().getFullYear()} Bilal. All rights reserved.
    </div>
  );
}

export default FooterBottom