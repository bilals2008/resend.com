// File: components/Hero/BG.tsx
import React from 'react'

function BG() {
  return (
    <div
      className="absolute w-full h-[690px] overflow-hidden bg-no-repeat bg-cover -top-4 left-36"
      style={{
        background: "url('/images/Home/hero-bg.png')",
      }}
    ></div>
  );
}

export default BG