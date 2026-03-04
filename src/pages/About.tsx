import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const About = () => {
  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl mb-8 text-deep-teal">
            The Story Behind the Story
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-charcoal/70 font-serif italic">
            "There is a moment in every screenplay where the character stops performing and starts being real."
          </motion.p>
        </motion.div>
      </Section>

      {/* Opening Hook & Pivotal Moment */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8 md:col-start-3 space-y-8 text-lg leading-relaxed text-charcoal/80">
            <p>
              It is the moment the audience leans forward. The moment the story stops being entertainment and becomes experience. I have spent my career trying to understand that moment. How it is created. What allows it. And — most importantly — how to help other writers find it in their own work.
            </p>
            
            <h3 className="text-2xl text-deep-teal font-serif pt-8">The Pivotal Moment</h3>
            <p>
              Screenwriting started as a hobby. It became something else entirely. I was at a point of profound change in my life — one of those intersections where everything you thought was solid shifts beneath your feet. In the middle of that upheaval, writing was the thing that made sense. Not just as an escape, but as a way of understanding what was happening — to me, to the people around me, to the stories we tell ourselves about who we are.
            </p>
            <p>
              The calling gnawed at me until I made the decision most sensible people would advise against: I stopped treating writing as something I did on the side and jumped into the deep end.
            </p>
          </div>
        </div>
      </Section>

      {/* The Journey */}
      <Section dark className="bg-forest-green">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop" 
              alt="Journey landscape" 
              className="w-full h-auto object-cover rounded-sm opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6 text-warm-ivory/90 leading-relaxed">
            <h2 className="text-3xl md:text-4xl text-warm-ivory mb-6">The Journey</h2>
            <p>
              What followed was a decade of immersion. I wrote screenplays for hire. I analysed scripts for production companies — hundreds of them — and began to see the patterns in what worked, what failed, and why. I mentored emerging writers and watched their struggles mirror my own early fumbling.
            </p>
            <p>
              I also travelled. Sixty-plus countries, each one teaching me something about how humans experience conflict, love, loss, and transformation. A bus ride through rural Turkey. A conversation with a stranger in a Buenos Aires café. Each experience became material.
            </p>
            <p>
              The breakthrough came when I started working with actors. Watching them prepare for roles — the way they would inhabit a character’s physical life, emotional history, and unconscious motivations — I saw a bridge that most writing education had completely missed. Writers build characters; actors bring them to life. What if the building process looked more like the bringing-to-life process?
            </p>
          </div>
        </div>
      </Section>

      {/* The Realisation & What I Bring */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl text-deep-teal mb-6">The Realisation</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              I developed what I now call method writing — an approach that asks the writer to inhabit their characters with the same depth and intimacy that a method actor brings to a role. Combined with the Question Method™, a series of deep-dive questions designed to excavate the storyverse, and holistic practices including meditation and therapeutic exploration, it became a complete methodology.
            </p>
          </div>

          <div className="h-px bg-charcoal/10 w-full" />

          <div>
            <h2 className="text-3xl md:text-4xl text-deep-teal mb-6">What I Bring Now</h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              I am a screenwriter, a holistic writing coach, and a deeply analytical person who has learned to trust his intuition. My particular strength is the ability to see both the structural mechanics of a screenplay and the emotional undercurrents that make it succeed or fail.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              I work especially well with European filmmakers writing in English. Having lived and worked across cultures, I understand the specific challenges and opportunities of telling culturally specific stories for a global market.
            </p>
          </div>
        </div>
      </Section>

      {/* Personal Touches */}
      <Section className="bg-muted-clay/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-deep-teal mb-8">Off The Page</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-12">
            Outside the writing room, you’ll find me exploring a new city, watching a film I’ve been saving for the right mood, butchering a new language with enthusiastic imprecision, or arguing about whether a particular TV series earned its ending. I am a self-professed film and TV nerd, a dedicated outdoor and sports enthusiast, and someone who genuinely believes that every conversation with a stranger is potential material.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-4xl md:text-5xl text-deep-teal mb-8">Let’s See What Your Story Needs</h2>
        <p className="text-xl text-charcoal/70 mb-12 max-w-2xl mx-auto">
          If my approach resonates, I’d love to hear about your project. Book a free discovery call and let’s talk about where you are and where your writing could go.
        </p>
        <Button to="/contact" variant="primary">Book a Discovery Call</Button>
      </Section>
    </>
  );
};

export default About;
