// File: app/(auth)/loading.tsx
import React from 'react'

function loading() {
  return (
    <div className="w-screen h-screen z-50 flex items-center justify-center overflow-x-hidden">
      <svg className="size-12 text-blue-600 animate-spin" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M6 2v6h.01L12 12l5.99-4H18V2H6zm0 20h12v-6h-.01L12 12l-5.99 4H6v6z"
        />
      </svg>
    </div>
  );
}

export default loading