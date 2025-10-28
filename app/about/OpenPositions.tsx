// File: app/about/OpenPositions.tsx
import TextBlock from '@/components/common/TextBlock'
import React from 'react'

function OpenPositions() {
  return (
    <div className="py-10">
      <TextBlock
        heading="Open positions"
        paragraph="Come build the future of email with us."
        className="text-center"
      />
      <div className="border-y max-w-[720px] mx-auto p-2 border-y-[#D6EBFD30] ">
        <h6 className="text-sm ">Software Engineer (Infrastructure)</h6>
        <p className=" font-light text-xs text-[#F1F7FEB5] ">
          {" "}
          Americas / Remote / Full-time
        </p>
      </div>
      <div className="border-y max-w-[720px] mx-auto p-2 border-y-[#D6EBFD30] mb-2">
        <h6 className="text-sm ">DevOps Engineer</h6>
        <p className=" font-light text-xs text-[#F1F7FEB5] ">
          {" "}
          Americas / Remote / Full-time
        </p>
      </div>
    </div>
  );
}

export default OpenPositions