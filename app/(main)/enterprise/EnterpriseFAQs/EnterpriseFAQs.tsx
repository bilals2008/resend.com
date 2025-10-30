// File: app/(main)/enterprise/EnterpriseFAQs/EnterpriseFAQs.tsx
import FAQs from '@/components/common/FAQs/FAQs'
import React from 'react'
import { EnterpriseFAQsdata } from './EnterpriseFAQsData';

function EnterpriseFAQs() {
  return (
    <div className="py-10">
      <FAQs data={EnterpriseFAQsdata} />
    </div>
  );
}

export default EnterpriseFAQs
