// File: app/pricing/Addon.tsx
import TextBlock from '@/components/common/TextBlock'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function Addon() {
  return (
    <div className="py-20">
      <TextBlock heading="Add-ons" headerClassName='ml-3' />
      <Card className="bg-transparent">
        <CardHeader>
          <CardTitle>Dedicated IPs - $30 / mo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='font-light text-secondary-foreground/50 '>
            Our fully managed dedicated IP&apos;s are a great way to obtain
            complete control of your reputation. We take great care to maintain
            good-standing shared IP&apos;s, but for some high-volume senders,
            you can&apos;t leave anything up to chance. Request a dedicated IP
            and we will warmup, monitor, and autoscale it based on your
            utilization so you can focus on one thing, sending.
          </p>
        </CardContent>
        <CardFooter>
          <Button className='rounded-full p-4'>Request Dedicated IP</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Addon