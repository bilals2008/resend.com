// File: app/docs/components/Navbar/ActionItems.tsx
import { ModeToggle } from '@/components/Theme-toggle';
import { Button } from '@/components/ui/button'
import { ArrowRight} from 'lucide-react';
import Link from 'next/link'
import React from 'react'

function ActionItems() {
  return (
    <div className="flex items-center gap-4">
      <Button variant={"link"} asChild>
        <Link href={"/login"}>Sign in</Link>
      </Button>
      <Button
        className="rounded-full bg-[#EBECED1A]/10"
        variant={"outline"}
        size={"sm"}
      >
        Get Started <ArrowRight size={3} />
      </Button>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}

export default ActionItems