// File: components/IntegrateLang/IntegrateLangs.tsx
import React from "react";
import LangList from "./LangList";
import CodeBlock from "./CodeBlock/CodeBlock";
import ColourfulText from "@/components/ui/colourful-text";
import ContentSection from "@/components/common/ContentSection";

function IntegrateLangs() {
  const descption =
    "A simple, elegant interface so you can start sending emails in minutes. It fits right into your code with SDKs for your favorite programming languages.";

  const headingText = (
    <span className="text-3xl font-medium tracking-wide leading-10 md:leading-12 text-center">
      Intergate{" "}
      <ColourfulText text="this moring" colors={["#FFFF92", "#EE8912"]} />
    </span>
  );

  return (
    <div className="py-10 max-w-5xl mx-auto">
      <ContentSection
        heading={headingText}
        desciption={descption}
        imgSrc="/images/GmailBox.jpg"
      />
      <LangList />
      <CodeBlock />
    </div>
  );
}

export default IntegrateLangs;
