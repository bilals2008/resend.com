// File: app/docs/components/DocsMain/ExploreSection.tsx
import React from 'react'
import { introductionData } from '../../data/docsContent'
import { Card, CardContent} from '@/components/ui/card'

function ExploreSection() {
    const {title,description,cards} = introductionData.explore
  return (
    <div className=" w-full py-4">
      <div className="py-4 space-y-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-neutral-400 text-md">{description}</p>
      </div>
      <div className=' w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
        {cards.map((card) => {
            return (
              <Card
                key={card.id}
                className="bg-[#0A0A0A80]/50 border border-[#25252580]/50  cursor-pointer"
              >
                <CardContent className='pb-2 md:pb-0'>
                  <p className="text-xl font-medium ">{card.title}</p>
                  <p className="text-sm font-light text-[#9E9E9E]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
        })}
      </div>
    </div>
  );
}

export default ExploreSection
