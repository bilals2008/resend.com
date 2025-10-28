// File: app/page.tsx

import Companies from "@/app/Home/Companies/Companies";
import DeveloperExperience from "@/app/Home/DeveloperExperience/DeveloperExperience";
import Hero from "@/app/Home/Hero/Hero";
import IntegrateLangs from "@/app/Home/IntegrateLang/IntegrateLangs";
import ReactEmailSection from "@/app/Home/ReactEmail/ReactEmailSection";
import EmailFeatures from "@/app/Home/EmailFeatures/EmailFeatures";
import Testimonial from "@/app/Home/Testimonial/Testimonial";
import AnalyticsControl from "@/app/Home/AnalyticsControl/AnalyticsControl";
import BeyondExpectations from "@/app/Home/BeyondExpectations/BeyondExpectations";

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
        <AnalyticsControl />
        <BeyondExpectations />
      </div>
    </>
  );
}
