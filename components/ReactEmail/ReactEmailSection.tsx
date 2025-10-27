// File: components/ReactEmail/ReactEmailSection.tsx
import React from "react";
import ContentSection from "../common/ContentSection";
import ImageSec from "./ImageSec";

function ReactEmailSection() {
    return (
        <div className="w-full mx-auto">
            <ContentSection
                imgSrc="/images/ReactLogo.jpg"
                imgalt="ReactLogo"
                heading="Develop emails using React"
                desciption="Create beautiful templates without having to deal with <table> layouts and HTML.Powered by react-email, our open source component library."
                btnText={["Get Started", "Check the Docs"]}
            />
            <ImageSec />
        </div>
    );
}

export default ReactEmailSection;
