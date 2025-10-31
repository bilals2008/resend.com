// File: app/docs/introduction/page.tsx
import React from "react";
import DocsMain from "../components/DocsMain/DocsMain";

function IntroductionPage() {
  return (
    <div className="py-10 px-2 ">
        {/* Main Content */}
        <main className="flex-1 px-5 py-2">
          <DocsMain />
        </main>
      </div>
  );
}

export default IntroductionPage;
