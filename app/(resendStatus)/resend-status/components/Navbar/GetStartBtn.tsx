// File: app/(resendStatus)/resend-status/components/Navbar/GetStartBtn.tsx
import { Button } from '@/components/ui/button'
import React from 'react'

function GetStartBtn() {
  return (
    <Button
      variant={"outline"}
      size={"default"}
      className="hidden md:block bg-[#21242D] cursor-pointer "
    >
      Get Started
    </Button>
  );
}

export default GetStartBtn