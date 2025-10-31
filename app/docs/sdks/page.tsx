// File: app/docs/sdks/page.tsx

import HelpfulSection from "../components/DocsMain/HelpfulSection";
import CatageriesSection from "./Categaries/CatageriesSection";
import SdkBreadcrum from "./SdkBreadcrum";
import SDKTopSection from "./SDKTopSection";

export default function Page() {
  return (
    <div className="px-2 pb-2">
              <SDKTopSection/>
              <CatageriesSection/>
              <HelpfulSection/>
              <SdkBreadcrum/>
          </div>
  );
}
