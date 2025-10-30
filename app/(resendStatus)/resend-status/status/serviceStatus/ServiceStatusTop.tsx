// File: app/(resendStatus)/resend-status/status/serviceStatus/ServiceStatusTop.tsx
import { Button } from '@/components/ui/button';
import { Check, ChevronDown } from 'lucide-react';
import React from 'react'

function ServiceStatusTop() {
  return (
   
      <div className="flex items-center justify-between">
        <p>Services</p>
        <div className="flex items-center gap-1">
          <Button variant={"secondary"} size={"sm"} className="rounded-xl cur">
            <Check className="size-3.5 p-0.5 rounded-full font-bold bg-green-400 text-black" />
            Operational{" "}
          </Button>
          <ChevronDown className="size-3" />
        </div>
    </div>
  );
}

export default ServiceStatusTop