// File: app/(main)/enterprise/EnterPriseHero/EnterPriseHero.tsx

import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'

function EnterPriseHero() {
  return (
    <div className='grid grid-cols-2 gap-5 py-5'>
      <Rightside/>
      <Leftside/>
    </div>
  )
}

export default EnterPriseHero