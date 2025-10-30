// File: app/(main)/enterprise/PartnershipSection.tsx
import ContentSection from "@/components/common/ContentSection";
import ShiningLine from "@/components/common/ShiningLine";
import React from "react";

function PartnershipSection() {
  return (
    <div className="py-10 max-w-2xl mx-auto">
      <div className="py-10 relative">
        <ShiningLine />
      </div>
      <ContentSection
        heading="Because you need a partner,
not just another vendor"
        desciption="As a lean but expert team, we can offer direct access to both product engineers and company
founders during the good times and the bad. Get access to humans that knows your business."
      />
    </div>
  );
}

export default PartnershipSection;
