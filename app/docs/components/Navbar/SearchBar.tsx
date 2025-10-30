// File: app/docs/components/Navbar/SearchBAr.tsx
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Search } from 'lucide-react'
import React from 'react'

function SearchBar() {
  return (
    <div className="bg-background ">
      <InputGroup className="rounded-sm  ">
        <InputGroupInput className="" placeholder="Search or ask..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">Ctrl K</InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export default SearchBar