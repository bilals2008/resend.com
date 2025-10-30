// File: app/(resendStatus)/resend-status/maintenance/page.tsx
import React from 'react'
import Maintenance from './Maintenance'

function page() {
  return (
    <div className=" py-10 max-w-5xl mx-auto">
      <div className="max-w-md mx-auto text-center">
        <h2 className=" text-xl md:text-3xl font-semibold text-gray-200">
         Current Maintenance Updates
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Here you can find details about any ongoing or scheduled maintenance
          affecting Resend services.
        </p>
      </div>
      <Maintenance />
    </div>
  );
}

export default page