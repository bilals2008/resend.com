// File: app/(main)/enterprise/EnterPriseHero/Rightside.tsx
import ContentSection from "@/components/common/ContentSection";
import React from "react";

function Rightside() {
  return (
    <div>
      <ContentSection
        heading="Delivery at any
sending volume"
        desciption="It doesn't matter if you send millions or hundreds of emails every
month. You need every guarantee that your messages will arrive
on time, that your data will be safely stored, and always available."
        headingClassName=" order-2 text-4xl text-balance md:text-start"
        paraClassName=" order-3 text-balance md:text-start"
        btn1ClassName="order-1 my-2 bg-background border text-white mb-3 hover:text-black"
        btnText={["Enterprise"]}
        btnWrapperClassName="justify-start!"
        ClassName=" md:items-start"
      />
    </div>
  );
}

export default Rightside;
