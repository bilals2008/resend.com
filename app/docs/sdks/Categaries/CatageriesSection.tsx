// File: app/docs/sdks/Categaries/CatageriesSection.tsx
import React from 'react'
import OfficalSdks from './OfficalSdks'
import CommunitySDKs from './CommunitySDKs'
import OpenAi from './OpenAi'

function CatageriesSection() {
  return (
    <div className='py-2'>
      <OfficalSdks/>
      <CommunitySDKs/>
      <OpenAi/>
    </div>
  )
}

export default CatageriesSection
