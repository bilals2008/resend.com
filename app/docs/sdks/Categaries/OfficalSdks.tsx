// File: app/docs/sdks/Categaries/OfficalSdks.tsx
import React from 'react'
import { sdksData } from '../../data/sdksData';
import { iconMap } from '../../components/DocsMain/iconsMap';
import Image from 'next/image';
import { Card, CardContent} from '@/components/ui/card';

function OfficalSdks() {
  return (
    <div>
      <section className="pt-8">
        <h2 className="text-2xl font-semibold pb-5">Offical SDKs</h2>
        <div className="grid grid-cols-2 gap-4">
          {sdksData.categories[0].items.map((sdk, idx) => (
            <Card
              key={idx}
              className="bg-[#0A0A0A80]/50 border border-[#25252580]/50 cursor-pointer"
            >
              <CardContent className="flex flex-col gap-2.5 px-2 pl-5">
                {(sdk.icon && iconMap[sdk.icon as keyof typeof iconMap]) || (
                  <Image
                    src="/images/Home/LangLogos/default.png"
                    alt="Default"
                    width={25}
                    height={25}
                  />
                )}
                <span className="text-md font-semibold text-neutral-100">
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

export default OfficalSdks
