// File: components/Companies/Companies.tsx
import React from "react";
import ShiningLine from "../../common/ShiningLine";
import CompaniesLogos from "./CompaniesLogos";

function Companies() {
  return (
    <div className=" mt-16 my-5 py-2 p-2 relative border-t rounded space-y-10">
      {/* ShiningLine */}
      <ShiningLine />
      {/* Content */}
      <div className="text-balance text-center py-5 font-light text-[#F1F7FEB5]">
        <p className="leading-7 ">
          Companies of all sizes trust Resend <br /> to deliver their most
          important emails.
        </p>
      </div>
      {/* CompaniesLogos */}

      <CompaniesLogos />
    </div>
  );
}

export default Companies;
