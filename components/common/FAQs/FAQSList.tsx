// File: components/common/FAQs/FAQSList.tsx

"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  data: { question: string; answer: string }[];
}
function FAQSList({data}:Props) {
  return (
    <div className="max-w-5xl py-2">
      <Accordion type="single" collapsible>
        {data.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border mb-2 rounded-sm"
          >
            <AccordionTrigger className="text-left text-white hover:no-underline px-2">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-neutral-400 px-5 pr-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQSList;
