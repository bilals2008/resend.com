// File: app/security/page.tsx
import ContentSection from "@/components/common/ContentSection";
import ShiningLine from "@/components/common/ShiningLine";
import React from "react";
import SecurityControl from "./SecurityControl";
import ReportBug from "./ReportBug";
import TrustedTeams from "./TrustedTeams";
import FAQs from "@/components/common/FAQs/FAQs";
import { securityFaqData } from "@/components/common/FAQs/faqData";

function page() {
    return (
      <div className="max-w-5xl pb-20 mx-auto">
        {/* Security */}
        <div className="pb-5">
          <ContentSection
            heading={"Security"}
            desciption={
              <>
                Resend is committed to the security <br /> and privacy of our
                customers data
              </>
            }
            btnText={["Contact us"]}
            btn1ClassName="-mt-7"
          />
        </div>
        <div className="relative">
          <ShiningLine />
        </div>
        {/* Data Protection */}
        <div className="py-20">
          <ContentSection
            heading="Data Protection"
            desciption="Robust security measures to protect sensitive information
and adhere to stringent industry standards."
          />
        </div>
        <div className="py-10 w-full"></div>
        {/* SOC 2 Compliant */}
        <div className="py-10">
          <ContentSection
            heading="SOC 2 Compliant"
            desciption="We partner with third-party firms to conduct regular audits. This isn't a short-term
growth play but a long-term security investment."
            btnText={["Learn more about SOC 2"]}
            btn1ClassName="-mt-7"
          />
        </div>
        {/* SecurityControl */}
        <SecurityControl />
        {/* Report Vulnerability */}
        <ReportBug/>
        {/* Trusted by the best engineering teams */}
        <TrustedTeams/>
        {/* FAQs */}
        <FAQs data={securityFaqData}/>
      </div>
    );
}

export default page;
