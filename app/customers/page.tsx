// File: app/customers/page.tsx
import TextBlock from '@/components/common/TextBlock'
import React from 'react'
import CustomerCategories from './CustomerCategories';
import BigCustomers from './BigCustomers';
import SmallCustomers from './SmallCustomers';

function page() {
  return (
    <div className="mx-auto max-w-5xl py-20">
      <TextBlock
        heading="Meet our customers"
        paragraph="Companies of all sizes trust Resend to deliver their most important emails."
        className="text-center pb-10 "
        paraClassName="md:leading-0!"
      />
      <CustomerCategories />
      <BigCustomers />
      <SmallCustomers/>
    </div>
  );
}

export default page