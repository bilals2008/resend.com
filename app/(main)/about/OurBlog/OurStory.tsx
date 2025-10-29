// File: app/about/OurStory.tsx
import React from 'react'

function OurStory() {
  return (
    <div className="py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl py-10 text-center">
        OurStory
      </h1>
      <div className="max-w-lg sm:max-w-xl md:max-w-2xl tracking-wide paraColor mx-auto text-base sm:text-lg md:text-[18px] space-y-3  md:space-y-4 leading-7 sm:leading-8 font-light align-middle text-center md:text-left">
        <p>
          Resend started with an open source project in 2022. We were frustrated
          by how difficult it was to build modern email templates that worked
          well across all email clients.
        </p>
        <p>
          As we started to dig deeper, it became clear that this was just the
          tip of the iceberg. We realized that sending emails that reach the
          inbox (not the spam folder) was the biggest pain point, so we started
          to explore something new.
        </p>
        <p>
          In 2023, we launched an entire email sending platform and joined Y
          Combinator&apos;s winter batch. We&apos;re creating something special
          here, and we&apos;re excited to build it with you.
        </p>
      </div>
    </div>
  );
}

export default OurStory