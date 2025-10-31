// File: app/docs/examples/ExapmlesCard.tsx
import React from 'react'
import { examplesData } from '../data/ExampleData';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { iconMap } from '../components/DocsMain/iconsMap';

function ExapmlesCard() {
  return (
    <div>
      <section className="pt-8">
        <h2 className="text-2xl font-semibold pb-5">Offical SDKs</h2>
        <div className="grid grid-cols-2 gap-4">
          {examplesData.examples.map((exp, idx) => (
            <Card
              key={idx}
              className="bg-[#0A0A0A80]/50 border border-[#25252580]/50 cursor-pointer"
            >
              <CardContent className="flex flex-col gap-2.5 px-2 pl-5">
                {(exp.icon && iconMap[exp.icon as keyof typeof iconMap]) || (
                  <Image
                    src="/images/Home/LangLogos/default.png"
                    alt="Default"
                    width={25}
                    height={25}
                  />
                )}
                <span className="text-md font-semibold text-neutral-100">
                  {exp.title}
                </span>
                <p className="text-sm text-[#9E9E9E]">
                {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExapmlesCard