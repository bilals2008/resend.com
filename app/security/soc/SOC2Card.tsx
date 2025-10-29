// File: app/security/soc/SOC2Card.tsx
"use client";

import React from "react";

function SOC2Card() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-8">
      <div className="w-full  p-6">
        <div className="space-y-6">
          {/* Title */}
          <h2 className="text-lg font-semibold">What is SOC 2?</h2>

          {/* Paragraphs */}
          <div className="space-y-4">
            <p className="text-sm leading-6 text-muted-foreground">
              SOC 2 is an audit report developed by the American Institute of
              CPAs (AICPA).
            </p>

            <p className="text-xs leading-6  text-muted-foreground">
              The audit evaluates controls related to security, availability,
              processing integrity, confidentiality, and privacy of a system.
            </p>

            <p className="text-xs leading-6  text-muted-foreground">
              There are two types of SOC 2 reports:
            </p>

            <ul className="ml-4 space-y-2 text-xs  text-muted-foreground">
              <li>
                <strong className="text-sm text-[#e6f6ff]">
                  Type I:
                </strong>{" "}
                checks if a company is compliant at a point in time.
              </li>
              <li>
                <strong className="text-sm text-[#e6f6ff]">
                  Type II:
                </strong>{" "}
                confirms that a company is still compliant during an observation
                window (typically 6 months).
              </li>
            </ul>

            <p className="text-xs leading-6  text-muted-foreground">
              Resend is SOC 2 Type II compliant.
            </p>
          </div>

          {/* Why is SOC 2 important? */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">
              Why is SOC 2 important?
            </h3>

            <p className="text-xs leading-6  text-muted-foreground">
              SOC 2 is not mandatory in a legal sense, and certification is not
              required by law.
            </p>

            <p className="text-xs leading-6  text-muted-foreground">
              Still, we believe that SOC 2 is crucial because it encourages
              companies to have solid controls in place to protect customer
              data.
            </p>

            <p className="text-xs leading-6  text-muted-foreground">
              For us, this isn’t a short-term growth play but the beginning of a
              long-term security investment.
            </p>
          </div>

          {/* Auditors & When */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium" >
              Who audited Resend?
            </h3>
            <p className="text-xs leading-6  text-muted-foreground">
              The auditing was done by{" "}
              <strong style={{ color: "#e6f6ff" }}>Advantage Partners</strong>{" "}
              which has a track record of partnering with many SaaS companies.
            </p>

            <h3
              className="text-sm font-medium mt-3"
              style={{ color: "#c7f0ff" }}
            >
              When were you audited?
            </h3>
            <p className="text-xs leading-6  text-muted-foreground">
              The reporting period is from August 1, 2023 to February 1, 2024.
            </p>
          </div>

          {/* Access & Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium">
              How can I access the SOC 2 report?
            </h3>
            <p className="text-xs leading-6  text-muted-foreground">
              You can download a copy of the report on the Documents page.
            </p>

            <h3
              className="text-sm font-medium mt-3"
              style={{ color: "#c7f0ff" }}
            >
              Can you answer a questionnaire?
            </h3>
            <p className="text-xs leading-6  text-muted-foreground">
              If you have a questionnaire that needs filling, please contact us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SOC2Card;
