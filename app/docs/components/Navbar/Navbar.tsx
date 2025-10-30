// File: app/docs/components/Navbar/Navbar.tsx
import Logo from '@/components/Header/Navbar/computer/Logo'
import React from 'react'
import SearchBar from "./SearchBar";
import ActionItems from './ActionItems';


function Navbar() {
  return (
    <div className='w-full px-4 py-3 border-b'>
        <div className='flex items-center justify-between'>
            <Logo/>
            <SearchBar/>
            <ActionItems/>
        </div>
    </div>
  )
}

export default Navbar