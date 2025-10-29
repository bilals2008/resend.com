// File: app/pricing/TabList.tsx
import { Button } from '@/components/ui/button'
import React from 'react'

function TabList() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="flex gap-3 items-center justify-center py-2">
        <Button
          className="bg-[#F1F7FEB5]/10 text-white hover:text-black"
        >
          Transactional Emails
        </Button>
        <Button variant={"ghost"}>Marketing Emails Emails</Button>
      </div>
    </div>
  );
}

export default TabList