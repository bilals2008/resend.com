// File: components/common/TextBlock.tsx
import React from 'react'
interface TextBlockProps {
  heading?: string | React.ReactNode;
  paragraph?: string | React.ReactNode;
  className?: string;
  headerClassName?: string;
  paraClassName?: string;
}
function TextBlock({
  heading,
  paragraph,
  className,
  headerClassName,
  paraClassName,
}: TextBlockProps) {
  return (
    <div className={className}>
      <h1
        className={`scroll-m-24 text-4xl font-medium tracking-tight text-balance leading-12 italic ${headerClassName}`}
      >
        {heading || (
          <>
            First-class <br /> developer experience
          </>
        )}
      </h1>
      <p
        className={`leading-7 italic mt-3 text-[#F1F7FEB5] font-light text-sm text-balance ${paraClassName}`}
      >
        {paragraph}
      </p>
    </div>
  );
}

export default TextBlock
