// File: app/page.tsx

import Companies from "@/components/Companies/Companies";
import DeveloperExperience from "@/components/DeveloperExperience/DeveloperExperience";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import IntegrateLangs from "@/components/IntegrateLang/IntegrateLangs";
import ReactEmailSection from "@/components/ReactEmail/ReactEmailSection";

export default function Home() {
  return (
    <>
      <div className="max-w-[97%] h-auto mx-auto px-2 py-3">
        <Header />
        <Hero/>
        <Companies/>
        <IntegrateLangs/>
        <DeveloperExperience/>
        <ReactEmailSection/>
      </div>
    </>
  )
}
