// File: components/Testimonial/ClientQoute.tsx
import Image from 'next/image'
import React from 'react'

function ClientQoute() {
  return (
    <div className="flex items-center justify-center gap-3 -mt-5">
      {/* Avatar */}
      <Image
        src={"/images/Home/client.png"}
        width={40}
        height={40}
        alt="Client imaage"
        className="rounded-full border border-[image:linear-gradient(42deg,#05050A_45%,rgba(229,237,253,0.482)_100%)]"
      />

      {/* Name and Title */}
      <div className="text-left">
        <div className="text-white text-sm font-medium">Guillermo Rauch</div>
        <div className="text-gray-400 text-xs">CEO at Vercel</div>
      </div>
    </div>
  );
}

export default ClientQoute