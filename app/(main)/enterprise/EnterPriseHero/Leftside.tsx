// File: app/(main)/enterprise/EnterPriseHero/Leftside.tsx
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronRight } from 'lucide-react';
import React from 'react'

function Leftside() {
  return (
    <div className="">
      <FieldSet className="border rounded-sm  p-8">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Email address</FieldLabel>
            <Input id="username" type="email" placeholder="Enter your email" />
          </Field>
          <Field>
            <FieldLabel htmlFor="feedback">How can we help?</FieldLabel>
            <Textarea id="feedback" rows={5} />
          </Field>
          <Field>
            <Button className="rounded-full max-w-24 p-1">
              Submit
              <ChevronRight />
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}

export default Leftside
