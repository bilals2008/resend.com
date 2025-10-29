// File: app/customers/BigCustomers/BigCustomers.tsx
import Image from 'next/image';
import React from 'react'

function BigCustomers() {
  return (
    <div className="max-w-5xl py-20 mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 ">
      {Array.from({ length: 6 }).map((_,idx) => {
        return (
          <Image
            key={idx}
            src={`/images/custmores/img-${idx + 1}.png`}
            alt={`customers img ${idx}`}
            width={307}
            height={384}
            className="border-2 rounded-2xl"
          />
        );
      })}
    </div>
  );
}

export default BigCustomers