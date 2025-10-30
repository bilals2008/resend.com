// File: app/(resendStatus)/resend-status/status/Status.tsx
import TextBlock from '@/components/common/TextBlock'
import { Check } from 'lucide-react';
import React from 'react'
import ServiceStatus from './serviceStatus/ServiceStatus';

function Status() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className='w-full flex items-center flex-col justify-center'>
        <Check className='size-10 bg-green-400 rounded-full p-1 text-black border'/>
        <TextBlock
          heading="All services are online"
          paragraph="Last updated on Apr 04 at 01:42am PDT"
          paraClassName='text-center'
        />
      </div>
      <ServiceStatus/>
    </div>
  );
}

export default Status