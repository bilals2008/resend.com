// File: app/docs/introduction/page.tsx
import React from "react";
import RightPanel from "../components/RightPanel/RightPanel";
import DocsDrawer from "../components/DocsNav/DocsDrawer";
import DocsNav from "../components/DocsNav/DocsNav";
import DocsMain from "../components/DocsMain/DocsMain";

function IntroductionPage() {
  return (
    <div className="py-10 px-2 ">
      {/* mobile menu button */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <DocsDrawer />
      </div>

      <div className="flex gap-4 relative">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-60 py-2">
          <DocsNav />
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-5 py-2 border-x ">
          <DocsMain />
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:block w-[244px] px-5 py-2 h-[600px]">
          <RightPanel />
        </aside>
      </div>
    </div>
  );
}

export default IntroductionPage;
