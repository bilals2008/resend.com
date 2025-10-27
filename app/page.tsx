// File: app/page.tsx

import Companies from "@/components/Home/Companies/Companies";
import DeveloperExperience from "@/components/Home/DeveloperExperience/DeveloperExperience";
import Hero from "@/components/Home/Hero/Hero";
import IntegrateLangs from "@/components/Home/IntegrateLang/IntegrateLangs";
import ReactEmailSection from "@/components/Home/ReactEmail/ReactEmailSection";
import EmailFeatures from "@/components/Home/EmailFeatures/EmailFeatures";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import AnalyticsControl from "@/components/Home/AnalyticsControl/AnalyticsControl";
import BeyondExpectations from "@/components/Home/BeyondExpectations/BeyondExpectations";

export default function Home() {
  return (
    <>
      <div className="max-w-[97%] h-auto mx-auto px-2 py-3">
        <Hero />
        <Companies />
        <IntegrateLangs />
        <DeveloperExperience />
        <ReactEmailSection />
        <EmailFeatures />
        <Testimonial />
        <AnalyticsControl/>
        <BeyondExpectations/>
      </div>
    </>
  );
}
