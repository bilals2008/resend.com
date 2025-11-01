// File: app/docs/sdks/Categaries/CommunitySDKs.tsx
import { Card, CardContent } from '@/components/ui/card';
import React from 'react'
import { sdksData } from '../../data/sdksData';
import Image from 'next/image';
import { iconMap } from '../../components/DocsMain/iconsMap';

function CommunitySDKs() {
  return (
    <div>
      <section className="pt-8">
        <h2 className="text-2xl font-semibold pb-5">Community SDKs</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {sdksData.categories[1].items.map((sdk, idx) => (
            <Card
              key={idx}
              className="bg-[#0A0A0A80]/50 border border-[#25252580]/50 cursor-pointer"
            >
              <CardContent className="flex flex-col gap-2.5 px-2 pl-5">
                {(sdk.icon && iconMap[sdk.icon as keyof typeof iconMap]) || (
                  <Image
                    src="/images/Home/LangLogos/default.png"
                    alt="Default"
                    className="grayscale hover:grayscale-0 transition duration-300"
                    width={35}
                    height={35}
                  />
                )}
                <span className="text-sm font-light text-neutral-100">
                  {sdk.title}
                </span>
                <p className="text-sm text-[#9E9E9E]">
                  github.com/resend/resend-{sdk.title.toLowerCase()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CommunitySDKs
