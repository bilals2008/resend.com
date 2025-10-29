// File: app/page.tsx

import AnalyticsControl from "./Home/AnalyticsControl/AnalyticsControl";
import BeyondExpectations from "./Home/BeyondExpectations/BeyondExpectations";
import Companies from "./Home/Companies/Companies";
import DeveloperExperience from "./Home/DeveloperExperience/DeveloperExperience";
import EmailFeatureList from "./Home/EmailFeatures/EmailFeatures";
import Hero from "./Home/Hero/Hero";
import IntegrateLangs from "./Home/IntegrateLang/IntegrateLangs";
import ReactEmailSection from "./Home/ReactEmail/ReactEmailSection";
import Testimonial from "./Home/Testimonial/Testimonial";


export default function Home() {
  return (
    <>
      <div className="max-w-[97%] h-auto mx-auto px-2 py-3">
        <Hero />
        <Companies />
        <IntegrateLangs />
        <DeveloperExperience />
        <ReactEmailSection />
        <EmailFeatureList />
        <Testimonial />
        <AnalyticsControl />
        <BeyondExpectations />
      </div>
    </>
  );
}
