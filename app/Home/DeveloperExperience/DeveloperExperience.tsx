// File: components/DeveloperExperience/DeveloperExperience.tsx
import React from "react";
import TextBlock from "../../../components/common/TextBlock";
import FeatureCard from "./FeatureCard";

function DeveloperExperience() {
  return (
    <div className="max-w-5xl mx-auto px-2  py-10">
      <TextBlock
        paraClassName="text-center md:text-left"
        headerClassName="text-center md:text-left"
        paragraph='"We are a team of engineers who love building tools for other engineers. Our goal is to create the email platform we ve always wished we had — one that just works."'
      />
      <FeatureCard />
    </div>
  );
}

export default DeveloperExperience;
