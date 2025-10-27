// File: components/ReactEmail/ReactEmailSection.tsx
import React from "react";
import ContentSection from "../../common/ContentSection";
import ImageSec from "./ImageSec";

function ReactEmailSection() {
  return (
    <div className="w-full mx-auto mt-20 mb-10">
      <ContentSection
        imgSrc="/images/Home/ReacEmailSec/ReactLogo.jpg"
        imgalt="ReactLogo"
        heading={
          <>
            <span className="hidden md:inline">Develop emails using React</span>
            <span className="md:hidden">Develop emails<br />using React</span>
          </>
        }
        desciption="Create beautiful templates without having to deal with <table> layouts and HTML.Powered by react-email, our open source component library."
        btnText={["Get Started", "Check the Docs"]}
      />
      <ImageSec />
    </div>
  );
}

export default ReactEmailSection;
