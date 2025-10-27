// File: components/Home/AnalyticsControl/AnalyticysTab.tsx
import { Globe, Mail, ThumbsUp } from 'lucide-react'
import React from 'react'

function AnalyticysTab() {
  return (
    <div className=" w-full  grid grid-cols-2 md:grid-cols-3 mx-auto gap-4">
      {/* Tab1 */}
      <div className=" w-full md:w-2xs border rounded-md p-1 py-4 bg-gradient-to-b from-black via-[#000000]  to-gray-400">
        <div className=" w-full flex items-center gap-2 justify-center ">
          <ThumbsUp
            size={30}
            className="border rounded-md p-1.5"
            color="#44FFA49E"
            fill="#44FFA49E"
          />
          <p className="text-sm italic font-light">Intuitive analytics</p>
        </div>
      </div>
      {/* Tab2 */}
      <div className=" w-full md:w-2xs border rounded-md p-1 py-4">
        <div className=" w-full flex items-center gap-2 justify-center ">
          <Mail size={30} className="border rounded-md p-1.5" />
          <p className="text-sm italic font-light">Full Visibility</p>
        </div>
      </div>
      {/* Tab3 */}
      <div className="w-full md:w-2xs  border rounded-md p-1 py-4">
        <div className=" w-full flex items-center gap-2 justify-center ">
          <Globe size={30} className="border rounded-md p-1.5" />
          <p className="text-sm italic font-light">Domain Authentication</p>
        </div>
      </div>
    </div>
  );
}

export default AnalyticysTab