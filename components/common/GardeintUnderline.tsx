// File: components/common/GardeintUnderline.tsx
import React from 'react'

function GardeintUnderline() {
  return (
    <>
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-500 group-hover:w-full"></span>

      {/* Soft hover glow */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-25 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur-lg transition-all duration-700 rounded-xl"></span>
    </>
  );
}

export default GardeintUnderline