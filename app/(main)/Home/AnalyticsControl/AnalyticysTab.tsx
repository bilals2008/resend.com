// File: components/Home/AnalyticsControl/AnalyticysTab.tsx
import { ChartColumnIcon, Globe, Mail } from 'lucide-react'
import React from 'react'

function AnalyticysTab() {
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 md:gap-2 ">
      {/* Tab1 */}
      <div className="w-full md:w-3xs border rounded-md p-1 py-2 flex items-center justify-center ">
        <div className="w-full flex items-center gap-2 justify-center ">
          <ChartColumnIcon
            size={30}
            className="border rounded-md p-1.5"
            color="#44FFA49E"
            fill="#44FFA49E"
          />
          <p className="text-sm italic font-light">Intuitive analytics</p>
        </div>
      </div>
      {/* Tab2 */}
      <div className="w-full md:w-2xs border rounded-md p-1 py-2 flex items-center justify-center ">
        <div className=" w-full flex items-center gap-2 justify-center ">
          <Mail size={30} className="border rounded-md p-1.5" />
          <p className="text-sm italic font-light">Full Visibility</p>
        </div>
      </div>
      {/* Tab3 */}
      <div className="w-full md:w-2xs border rounded-md p-1 py-2 flex items-center justify-center ">
        <div className=" w-full flex items-center gap-2 justify-center ">
          <Globe size={30} className="border rounded-md p-1.5" />
          <p className="text-sm italic font-light">Domain Authentication</p>
        </div>
      </div>
    </div>
  );
}

export default AnalyticysTab