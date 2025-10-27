// File: components/common/GlassShine.tsx
import React from 'react'

function GlassShine() {
  return (
    <div>
      {" "}
      {/* Subtle reflection line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      {/* Soft glass fade (rebalanced transparency) */}
      <div className="absolute top-0 inset-x-0 h-[120px] bg-gradient-to-b from-white/[0.03] via-white/[0.02] to-transparent backdrop-blur-[0.5px] " />
    </div>
  );
}

export default GlassShine