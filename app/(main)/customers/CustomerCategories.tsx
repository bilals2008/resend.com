// File: app/customers/CustomerCategories.tsx
import { Button } from '@/components/ui/button'
import React from 'react'

function CustomerCategories() {
  return (
    <div className="max-w-5xl mx-auto py-5 px-2 flex items-center justify-center gap-3 flex-wrap">
      <Button>Feature</Button>
      <Button variant={"outline"}>Developer Tools</Button>
      <Button variant={"outline"}>Artificial Intelligence</Button>
      <Button variant={"outline"}>Fintech</Button>
      <Button variant={"outline"}>Open Source</Button>
      <Button variant={"outline"}>SaaS</Button>
      <Button variant={"outline"}>Studios</Button>
      <Button variant={"outline"}>Travel</Button>
    </div>
  );
}

export default CustomerCategories