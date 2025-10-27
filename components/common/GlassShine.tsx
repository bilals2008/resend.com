// File: components/common/GlassShine.tsx
import React from 'react'

function GlassShine() {
  return (
    <div>
      {" "}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {/* Soft glass gradient layer */}
      <div className="absolute top-0 inset-x-0 h-[120px] bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
    </div>
  );
}

export default GlassShine