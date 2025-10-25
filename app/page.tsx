// File: app/page.tsx

import Companies from "@/components/Companies/Companies";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <div className="max-w-[97%] h-auto mx-auto px-2 py-3">
        <Header />
        <Hero/>
        <Companies/>
      </div>
    </>
  )
}
