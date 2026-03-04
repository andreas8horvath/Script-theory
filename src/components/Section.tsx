import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section = ({ children, className, id, dark = false }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 md:py-32 px-6 lg:px-12 overflow-hidden",
        dark ? "bg-deep-teal text-warm-ivory" : "bg-warm-ivory text-charcoal",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
