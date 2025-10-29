// File: components/common/FAQs/FAQs.tsx
"use client";
import React from "react";
import FAQSList from "./FAQSList";

interface FAQsProps {
  data: { question: string; answer: string }[];
}

function FAQs({ data }: FAQsProps) {
  return (
    <div className="space-y-6">
      {/* Heading */}
      <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">
        Frequently Asked Questions
      </h4>

      {/* FAQ List */}
      <FAQSList data={data} />
    </div>
  );
}

export default FAQs;
