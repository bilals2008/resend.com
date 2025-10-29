// File: components/Testimonial/Testimonial.tsx
import React from "react";
import ClientQoute from "./ClientQoute";
import ShiningLine from "@/components/common/ShiningLine";
import ContentSection from "@/components/common/ContentSection";

function Testimonial() {
  const heaing = (
    <span>
      Resend is transforming email for developers. Simple interface, easy
      integrations, handy templates. What else could we ask for.
    </span>
  );
  return (
    <div className="my-30">
      <div className="relative">
        <ShiningLine />
      </div>
      <ContentSection
        imgSrc="/vercel.svg"
        imgWidth={40}
        imgHeight={40}
        imgalt="vercel logo"
        heading={heaing}
        imgClassName="md:bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(200,200,200,0.15)_30%,#000000_90%)] p-4 rounded-full flex items-center justify-center border md:border-none bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(200,200,200,0.45)_30%,#000000_90%)]"
        headingClassName="text-xl font-medium max-w-xl mx-auto leading-8 md:leading-7 mt-4"
      />
      <ClientQoute />
    </div>
  );
}

export default Testimonial;
