import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "You have a talent for bringing the page alive and bringing me into the story.",
    author: "Screenwriting Client",
    role: "Feature Film Writer"
  },
  {
    id: 2,
    text: "Mark’s unique combination of honesty and support helped me find the emotional core of my script. I finally broke through the block that had held me back for years.",
    author: "David L.",
    role: "TV Pilot Writer"
  },
  {
    id: 3,
    text: "The holistic approach changed my entire writing process. I'm not just writing scenes anymore; I'm inhabiting them. The difference in my work is night and day.",
    author: "Elena M.",
    role: "Director & Writer"
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="relative max-w-4xl mx-auto px-6 md:px-12 py-12">
      <Quote className="text-antique-brass mx-auto mb-8 opacity-50 w-12 h-12" />
      
      <div className="relative h-[240px] md:h-[180px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full text-center"
          >
            <h3 className="text-xl md:text-3xl font-serif italic leading-relaxed mb-6 text-textured-vellum">
              "{testimonials[index].text}"
            </h3>
            <div className="flex flex-col items-center">
              <span className="text-sm uppercase tracking-widest font-bold text-golden-ocher">
                {testimonials[index].author}
              </span>
              <span className="text-xs text-textured-vellum/60 mt-1">
                {testimonials[index].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full border border-textured-vellum/20 text-textured-vellum/60 hover:text-textured-vellum hover:border-textured-vellum transition-colors focus:outline-none"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full border border-textured-vellum/20 text-textured-vellum/60 hover:text-textured-vellum hover:border-textured-vellum transition-colors focus:outline-none"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
