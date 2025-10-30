// File: app/(auth)/register/page.tsx
import { SignupForm } from "@/components/ui/signup-form";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center">
     
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 ml-6 text-sm size-10 rounded-md p-2 border-2 text-white font-bold hover:bg-muted/50"
        >
          R
        </Link>
        <SignupForm className="bg-background" />
      </div>
    </div>
  );
}
