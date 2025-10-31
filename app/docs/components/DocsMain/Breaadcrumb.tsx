// File: app/docs/components/DocsMain/Breaadcrumb.tsx
import Link from 'next/link';
import React from 'react'
import { introductionData } from '../../data/docsContent';
import { ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Breaadcrumb() {
  return (
    <div className="w-full py-4 flex items-center justify-end">
      {introductionData.next.map((i, idx) => {
        return (
          <Button className="" key={idx} variant={"link"} asChild>
            <Link key={idx} href={i.link}>
              {i.title} <ChevronRightIcon />
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default Breaadcrumb
