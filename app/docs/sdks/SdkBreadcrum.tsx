// File: app/docs/sdks/SdkBreadcrum.tsx
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronRightIcon} from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function SdkBreadcrum() {
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <Button className="" variant={"link"} asChild>
        <Link href="/docs/introduction">
          <ChevronLeft /> Introduction
        </Link>
      </Button>
      <Button className="" variant={"link"} asChild>
        <Link href="/docs/examples">
          Examples <ChevronRight />
        </Link>
      </Button>
    </div>
  );
}

export default SdkBreadcrum
