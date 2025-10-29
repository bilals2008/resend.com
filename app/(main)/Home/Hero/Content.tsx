// File: components/Hero/Content.tsx
"use client"
import React from 'react'
import Badge from './Content/Badge';
import Heading from './Content/Heading';
import Description from './Content/Description';
import CTA from './Content/CTA';

function Content() {
  return (
    <>
      <div className="order-2 md:order-1 text-center lg:text-left flex flex-col gap-2">
        {/* Badge */}
      <Badge/>

        {/* Heading */}
      <Heading/>

        {/* Description */}
      <Description/>

        {/* CTA */}
       <CTA/>
      </div>
    </>
  );
}

export default Content