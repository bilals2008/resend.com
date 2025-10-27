// File: components/common/ShiningLine.tsx
import React from 'react'

function ShiningLine() {
  return (
    <>
      <div className="bg-radial to-50% to-[#b10c0c1a] from-0% from-[#998d8d] w-72 mx-auto h-px absolute top-0 left-1/5 md:left-2/5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </>
  );
}

export default ShiningLine
