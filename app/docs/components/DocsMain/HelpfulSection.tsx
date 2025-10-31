// File: app/docs/components/DocsMain/HelpfulSection.tsx
import { Button } from '@/components/ui/button';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React from 'react'

function HelpfulSection() {
  return (
    <div className="py-10">
      <div className='flex gap-2 items-center'>
        <p className=' pr-5'>Was this page helpful?</p>
        <Button className='p-2' variant={"outline"} >
            <ThumbsUp/> Yes
        </Button>
        <Button className='p-2' variant={"outline"} >
            <ThumbsDown/> No
        </Button>
      </div>
    </div>
  );
}

export default HelpfulSection
