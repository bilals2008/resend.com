// File: components/Hero/Hero.tsx
import React from 'react'
// import BG from './BG';
import Content from './Content';
import ImgSection from './ImgSection';
import Combinator from './Combinator';

function Hero() {
  return (
    <>
      <div className="relative w-full h-auto mx-auto px-4 py-24 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* BG Image */}
        {/* <BG/> */}
        <Content />
        <ImgSection />
      </div>
      <Combinator />
    </>
  );
}

export default Hero
