// File: components/Footer/FooterLinks.tsx
import React from "react";
import FooterColumn from "./FooterColumn";

export default function FooterLinks() {
  return (
    <>
      <FooterColumn
        title="Documentation"
        links={["Overview", "API Reference", "Guides", "SDKs"]}
      />
      <FooterColumn
        title="Resources"
        links={["Blog", "Examples", "Pricing", "Status"]}
      />
      <FooterColumn title="Company" links={["About", "Careers", "Contact"]} />
      <FooterColumn title="Legal" links={["Privacy", "Terms", "Security"]} />
    </>
  );
}
