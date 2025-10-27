// File: app/page.tsx

import Companies from "@/components/Home/Companies/Companies";
import DeveloperExperience from "@/components/Home/DeveloperExperience/DeveloperExperience";
import Header from "@/components/Header/Header";
import Hero from "@/components/Home/Hero/Hero";
import IntegrateLangs from "@/components/Home/IntegrateLang/IntegrateLangs";
import ReactEmailSection from "@/components/Home/ReactEmail/ReactEmailSection";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import EmailFeatureList from "@/components/Home/EmailFeatures/EmailFeatureList";

export default function Home() {
  return (
    <>
      <div className="max-w-[97%] h-auto mx-auto px-2 py-3">
        <Header />
        <Hero />
        <Companies />
        <IntegrateLangs />
        <DeveloperExperience />
        <ReactEmailSection />
        <EmailFeatureList />
        <Testimonial />
      </div>
    </>
  );
}
