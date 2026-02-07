'use client';

import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type PhasesAccordionProps = {
  children?: React.ReactNode;
  defaultOpen?: string;
};

const PhasesAccordion: React.FC<PhasesAccordionProps> = ({
  children,
  defaultOpen,
}) => {
  const [open, setOpen] = React.useState<string | undefined>(defaultOpen);

  return (
    <Accordion type='single' collapsible value={open} onValueChange={setOpen}>
      {children}
    </Accordion>
  );
};

export default PhasesAccordion;

type PhasesAccordionItemProps = {
  id: string;
  title: string;
  description: string;
};

export const PhasesAccordionItem: React.FC<PhasesAccordionItemProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <AccordionItem
      value={id}
      className='mb-5 border-b-1 border-neutral-300 last:mb-0 last:pb-0 md:mb-8'
    >
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{description}</AccordionContent>
    </AccordionItem>
  );
};
