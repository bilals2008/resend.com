// File: app/docs/components/DocsMain/DocsMain.tsx
"use client";

import React from "react";

import TopSection from "./TopSection";
import QuickstartSection from "./QuickstartSection";
import ExploreSection from "./ExploreSection";
import HelpfulSection from "./HelpfulSection";
import Breaadcrumb from "./Breaadcrumb";

export default function DocsMain() {
  return (
    <div className="pl-5 text-neutral-200">
      {/*  Top Section */}
      <TopSection />
      {/* Quickstart Section */}
      <QuickstartSection />
      {/* Explore Section */}
      <ExploreSection/>
      <HelpfulSection/>

    <Breaadcrumb/>
    </div>
  );
}
